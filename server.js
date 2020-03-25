const express = require('express');
const nodemailer = require('nodemailer');
const creds = require('./config');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());
app.get('/', function(req, res, next) {
  res.json('hello');
});
app.get('http://localhost:5000/send', function(req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' });
});

// // app.engine('handlebars', exphbs());
// // app.set('view engine', 'handlebars');

// // app.use('client/public', express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('hello');
// });

// app.post('/send', (req, res) => {
//   console.log(req.body);
// });

// // console.log that your server is up and running
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

// // create a GET route

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
app.post('/send', (req, res, next) => {
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;

  var transport = {
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: creds.USER,
      pass: creds.PASS,
    },
  };

  var transporter = nodemailer.createTransport(transport);

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('All works fine, congratz!');
    }
  });

  var mail = {
    from: 'info@johnnyk.dev',
    to: 'info@johnnyk.dev',
    subject: 'Contact form request',
    html: message,
    // html: firstName,
    // lastName,
    // email,
    // message,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log('error!!!');

      res.json({
        msg: 'fail',
      });
    } else {
      console.log('SENT!!!');
      res.json({
        msg: 'success',
      });
    }
  });
});
