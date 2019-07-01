var http = require('http'); 
const url = require('url');
var fs = require('fs');

const calc = require('./calc.js');
const fileHandler = require('./fileHandler');

var server = http.createServer(function (req, res) {   
//calculator    
  var q = url.parse(req.url, true);
  var pObj = q.query;
  console.log(q.query); 
  fHandlerObject = new fileHandler('./srcfile.json', './targetFile.txt');  
  if (pObj.app == 'calculator') {
  var result = 0;
  var arg1 = pObj.i1;
  var arg2 = pObj.i2;
  
  cObj = new calc(arg1, arg2);

  if (pObj.action == 'sum') {
      result = cObj.sum();
  } else if (pObj.action == 'subtract') {
      result = cObj.subtract();
  } else if (pObj.action == 'multiply') {
      result = cObj.multiply();
  } else if (pObj.action == 'divide') {
      result = cObj.divide();
  } else {
      result = "invalid action"
  }
  respString = "Answer :" + result;
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write(respString);  
  res.end();
} else if (pObj.app == 'fcopy') {
//reading and writing file
  fHandlerObject.copy();
  respString = "Copied file ";
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write(respString);  
  res.end();  

} else if (pObj.app == 'displayHtml') {
        //display html
         fs.readFile("./test.html", (err, data) => {
          if (err) throw err;

          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.write(data);  
          res.end();  
        })

} else if (pObj.app == 'displayJson') {
    //display json

    fs.readFile("./srcfile.json", (err, data) => {
        if (err) throw err;

        res.writeHead(200, { 'Content-Type': 'application/json' });
        respString =  data.toString();
        res.write(respString);  
        res.end();
    })
} else {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    respString = "App not found";
    res.write(respString);  
    res.end();  
}
   
});

server.listen(5000);

console.log('Node.js calculator web server is running at port 5000..')