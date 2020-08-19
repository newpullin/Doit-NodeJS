var url = require('url');

var curURL = url.parse('hptts://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty')

var curStr = url.format(curURL);
console.log(curStr);
console.dir(curURL);

var querystring = require('querystring')
var param = querystring.parse(curURL.query)

console.log(param.query);
console.log(querystring.stringify(param));