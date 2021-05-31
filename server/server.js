const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.post('/checkout', (req, res) => {
  // Crea un objeto de preferencia
  let preference = {
    items: [
      {
        title: req.body.title,
        unit_price: parseInt(req.body.price),
        quantity: 1,
      },
    ],
    back_urls: {
      success: 'http://localhost:3001/homepage',
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
