var images = [];
$('".piclist li img').each(function (idx, element) {
  var $element = $(element);
  images.push('https://www.erjinfu.com' + $element.attr('src'));
});
