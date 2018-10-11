var fs = require("fs");

console.log("查看 /tmp 目录");
fs.readdir("./images/906",function(err, files){
   if (err) {
       return console.error(err);
   }
   var arr = files.map((item)=>item.substring(6));
   console.log(arr);
});
