import express from 'express';
import path from 'path';

const app = express()
const port = process.env.PORT || 3000;

app.get('/abc', (req, res) => {

    console.log("request ip: ", req.ip);

  res.send('Hello World! ' + new Date().toString());
})

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './web/build')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})