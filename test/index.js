var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get('/', function (req, res, next) {
  superagent.get('http://jandan.net/ooxx')
  // https://www.erjinfu.com/invest/ajax_detail
    .end(function (err, sres) {
      if (err) {
        return next(err);
      }
      var $ = cheerio.load(sres.text);
      var items = [];
      // $('.row img').each(function (idx, element) {
      //   var $element = $(element);
      //   items.push({
      //     src: $element.attr('src')
      //   });
      // });
      $('.row img').map(function(a, b){
        console.log(b)
      })

      // res.send(items);
    });
});


app.listen(3000, function () {
  console.log('app is listening at port 3000');
});