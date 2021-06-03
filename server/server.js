const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mercadopago = require('mercadopago');
// Agrega credenciales
mercadopago.configure({
  //Acces token del cliente
  access_token:
    'APP_USR-1810810111840727-053019-1eef39c1f4d3bfd3ecc7be148e1b4382-767588494',
});

//routes
app.get('/', function (req, res) {
  res.status(200).send('<h1>hola backend</h1>');
});
app.get('/send-email', function (req, res) {
  res.status(200).send('mails enviados?');
});

app.post('/checkout', async (req, res) => {
  const { name, email, phone, payment, shipping, instagram } = req.body;

  if (payment === 'mercado pago') {
    let preference = {
      items: [
        {
          title: req.body.title,
          unit_price: parseInt(req.body.price),
          quantity: 1,
        },
      ],
      back_urls: {
        success: 'http://localhost:3000/checkout',
        failure: 'http://localhost:3000/homepage',
        pending: 'http://localhost:3000/homepage',
      },
      auto_return: 'approved',
    };

    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.redirect(response.body.init_point);
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    res.redirect('http://localhost:3000/homepage');
  }

  contentHTML = `
  <h1>Orden de Compra de ${name}<h1>
  <ul>
  <li>Email: ${email} </li>
  <li>Phone: ${phone} </li>
  <li>Instagram: ${instagram}</li>
  <li>Forma de pago: ${payment}</li>
  <li>Forma de entrega: ${shipping}</li>
  </ul>
  `;

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'lautaronasello@gmail.com',
      pass: 'kqgselskvibwmshb',
    },
  });
  transporter.verify().then(() => {
    console.log('ready for send emails');
  });
  // send mail with defined transport object
  await transporter.sendMail({
    from: `${name}, <${email}> `, // sender address
    to: 'lautaronasello@gmail.com',
    subject: 'Compra nueva en MenosCaosTeam', // Subject line
    html: contentHTML, // html body
  });
});

app.get('/feedback', function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

//server
app.listen(3001, () => {
  console.log('server on port 3001');
});
