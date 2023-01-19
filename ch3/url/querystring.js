const url = require('ch3/url/url');
const querystring = require('ch3/url/querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse: ', query);
console.log('querystring.parse: ', querystring.stringify(query));