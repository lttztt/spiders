var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get('/', function (req, res, next) {
  superagent.get('https://www.erjinfu.com/invest/903.html')
    // .set('Cookie','PHPSES
    .end(function (err, sres) {
      if (err) {
        return next(err);
      }
      var $ = cheerio.load(sres.text);
      var items = [];
      res.send(sres.text);
      // $('#pic img').each(function (idx, element) {
      //   var $element = $(element);
      //   console.log($element);
      //   items.push({
      //     src: $element.attr('src')
      //   });
      // });

      // res.send(items);
    });
});


app.listen(4000, function () {
  console.log('app is listening at port 4000');
});