require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let port = process.env.PORT || 3001;

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
  const { name, email, phone, payment, shipping, instagram, prods } = req.body;
  text = `
Orden de Compra de ${name}
Email: ${email} 
Phone: ${phone}
Instagram: ${instagram}
Forma de pago: ${payment}
Forma de entrega: ${shipping}
Productos:
${prods}
`;
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
        success: 'http://localhost:3000/success',
        failure: 'http://localhost:3000/failure',
        pending: 'http://localhost:3000/pending',
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

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'lautaronasello@gmail.com',
        pass: 'kqgselskvibwmshb',
      },
    });
    // send mail with defined transport object
    await transporter.sendMail({
      from: `${name}, <${email}> `, // sender address
      to: 'lautaronasello1@gmail.com',
      subject: 'Compra nueva en MenosCaosTeam', // Subject line
      text: text,
    });
    await transporter.sendMail({
      from: 'MenosCaosTeam, <menoscaosporfavor@gmail.com>', // sender address
      to: `${email}`,
      subject: 'Gracias por tu compra en Menos Caos por Favor', // Subject line
      text: 'Gracias por tu compra! En breve nos estaremos comunicando con vos para arreglar la entrega del producto',
    });
  } else {
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
      to: 'lautaronasello1@gmail.com',
      subject: 'Compra nueva en MenosCaosTeam', // Subject line
      text: text, // html body
    });
    await transporter.sendMail({
      from: 'MenosCaosTeam, <menoscaosporfavor@gmail.com>', // sender address
      to: `${email}`,
      subject: 'Gracias por tu compra en Menos Caos por Favor', // Subject line
      text: 'Gracias por tu compra! En breve nos estaremos comunicando con vos para arreglar la entrega del producto',
    });
    res.redirect('http://localhost:3000/homepage');
  }
});

app.get('/feedback', function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

app.get('/notifications', function (req, res) {
  res.send('<h1>hola</h1>');
});
//server
app.listen(port, () => {
  console.log(`server on port ${port}`);
});
