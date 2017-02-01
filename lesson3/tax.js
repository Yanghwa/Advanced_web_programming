/** Created by Junghwan Yang on 1/25/2017. ...*/

//dependencies
let http = require('http');
let url = require('url');
let accounting = require('accounting');

http.createServer(function(request, response) {
	//get the whole querystring (parameter list) ?amount=100
	let qs = url.parse(request.url, true).query;
	let amount = qs.amount;

	//calculate tax and total
	let hst = parseFloat(amount) * .13;
	let total = parseFloat(amount) + parseFloat(hst);

	//display all 3 values on the page
	response.write('Amount: '+accounting.formatMoney(amount)+'\n' +
		'HST: ' + accounting.formatMoney(hst) + '\n' +
			'Total: ' + accounting.formatMoney(total) + '\n');
	response.end();
}).listen(3000);

console.log('Tax Server running on port 3000');
