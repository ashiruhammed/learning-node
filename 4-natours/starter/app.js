const app = require('express')();

const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hellow from the server side');
});

app.listen(port, () => {
  console.log('APP IS RUNNING ON PORT ${3000}');
});
