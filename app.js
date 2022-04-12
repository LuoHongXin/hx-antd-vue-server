const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs');
// Routes
app.use(express.static("./dist"));
app.get('/tableData', (req, res) => {
  fs.readFile(
    './tasks.json',
    {
      encoding: 'utf8', //编码方式
      flag: 'r', //可读
    },
    (err, data) => {
      const obj = JSON.parse(data);
      let jsData = [...obj.data];
      let { start, size, name, description } = req.query;
      if (name) {
        jsData = jsData.filter(item => {
          let nameArr = name.split(',');
          let flag = false;
          nameArr.forEach(str => {
            if (item.name.includes(str)) {
              flag = true;
            }
          });
          return flag;
        });
      }
      if (description) {
        jsData = jsData.filter(item => {
          return item.name.includes(description);
        });
      }
      let outData = [];
      if (start) {
        for (let i = (start - 1) * size; i < start * size; i++) {
          if (jsData[i]) {
            outData.push(jsData[i]);
          }
        }
      } else {
        start = 1;
        size = jsData.length;
        outData = jsData;
      }
      res.send({ data: outData, total: jsData.length, size: size - 0, start: start - 0 });
    }
  );
});
app.get('/404', (req, res) => {
  res.status(404).send('Not found')
})

app.get('/500', (req, res) => {
  res.status(500).send('Server Error')
})

// Error handler
app.use(function(err, req, res, next) {
  console.error(err)
  res.status(500).send('Internal Serverless Error')
})

app.listen(9000, () => {
  console.log(`Server start on http://localhost:9000`);
})
