// var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
var fs = require('fs');
var request = require('request');
var mkdirp = require('mkdirp');

var dataId = '903'

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
    var dir = './images';
    for(var i = 0; i < items.length; i++){
      // setTimeout(function(){
      //   console.log('正在下载' + fileNames[i]);
      //   download(items[i],dir, fileNames[i])
      //   console.log('下载完成' + fileNames[i]);
      // }, 100);
      console.log(i)
      console.log('正在下载' + fileNames[i]);
      download(items[i], dir, fileNames[i])
      console.log('下载完成' + fileNames[i]);
    }
    // setTimeout(function(){
    //   copyImg(fileNames);
    // }, 100)
  });


var download = function(url, dir, filename) {
  request.head(url, function(err, res, body){
    request(url).pipe(fs.createWriteStream(dir + "/" + filename));
  })
}

var copyImg = function(list){
  for (var i = list.length - 1; i >= 0; i--) {
    var fromImg = "./images/" + list[i];
    var targleName = list[i].substr(list[i].lastIndexOf('_') + 1);
    fs.readFile(fromImg, function(err,originBuffer){
      var base64Img = originBuffer.toString("base64");                //base64 图片编码
      var decodeImg = new Buffer(base64Img,"base64");                  //new Buffer(string, encoding)
      fs.writeFile("./images/" + targleName ,decodeImg,function(err){        // 生成图片3(把base64位图片编码写入到图片文件)
          if (err) {console.log(err)}
            console.log('复制完成')
      })
    })
  }
}

