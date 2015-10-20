'use strict';
var $ = require('jquery');

var subtotal = $('#subtotal');
var tax = $('#tax');
var form = $('#form');
var submit = $('#submit');

function calculate(e) {
	e.preventDefault();

	if(subtotal.val() > 0 && tax.val() > 0) {
		var subtotalValue = parseFloat(subtotal.val());
		var taxAmount = subtotalValue*parseFloat(tax.val());
		var total = taxAmount+subtotalValue;
		$('#total').val(total);
	}
	else if(subtotal.val() < 0 || tax.val() < 0) {		
		$('#errors').text('You have entered a negative number');
	}
	else if(typeof subtotal.val() === 'string' || typeof tax.val() === 'string') {
		$('#errors').text('You have entered text');
	}
}

submit.on('click', calculate);