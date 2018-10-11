var cheerio = require('cheerio');
var superagent = require('superagent');

module.exports.promise = new Promise(function(resolve, reject) {
	superagent.get('https://www.erjinfu.com/invest/index.html')
  .end(function (err, sres) {
    if (err) { return next(err); }
    var $ = cheerio.load(sres.text);
    var items = [];
    var fileNames = [];
    $('.investment_list>a').each(function (idx, element) {
      var $element = $(element);
      var fileUrl = $element.attr('href');
      items.push(fileUrl); 
      fileNames.push(fileUrl.substr(fileUrl.lastIndexOf('/') + 1).substr(-99,3));
    });
    resolve(fileNames);
  });
})


