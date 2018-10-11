var cheerio = require('cheerio');
var superagent = require('superagent');
var fs = require('fs');
var request = require('request');
var mkdirp = require('mkdirp');
// 引入获取投资列表页的list的方法
var getList = require('./getList.js');

console.log(getList)
var { promise } = getList;

promise.then((list)=>{
	console.log('获取投资列表页的list!!')
	console.log(list);
	for (var i = list.length - 1; i >= 0; i--) {
		mkdirdowm(list[i])
	}
})

var mkdirdowm = function(dataId){
	mkdirp('./images/' + dataId, function (err) {
    if (err) console.error(err)
    else console.log('建立./images/' + dataId + '成功!');
	});

	superagent.post('https://www.erjinfu.com/invest/ajax_detail')
	  .type('form')
	  .send({id: dataId })
	  .end(function (err, sres) {
	    if (err) { return next(err); }
	    var $ = cheerio.load(sres.text);
	    var items = [];
	    var fileNames = [];
	    var hostUrl = 'https://www.erjinfu.com'
	    $('#pic img').each(function (idx, element) {
	      var $element = $(element);
	      var fileUrl = hostUrl + $element.attr('src');
	      items.push(fileUrl); 
	      fileNames.push(fileUrl.substr(fileUrl.lastIndexOf('/') + 1))
	    });
	    var dir = './images/' + dataId;
	    for(var i = 0; i < items.length; i++){
	      console.log(i)
	      console.log('正在下载' + fileNames[i]);
	      download(items[i], dir, fileNames[i])
	      console.log('下载完成' + fileNames[i]);
	    }
	  });
}

var download = function(url, dir, filename) {
  request.head(url, function(err, res, body){
    request(url).pipe(fs.createWriteStream(dir + "/" + filename));
  })
}


