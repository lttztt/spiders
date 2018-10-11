var getList = require('./new.js');
console.log(getList)
var { promise } = getList;

// console.log(list);

promise.then((list)=>{
	console.log('获取列表.')
	console.log(list);
})