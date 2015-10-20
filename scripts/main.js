'use strict';
var $ = require('jquery');

var $subtotal = $('#subtotal');
var $tax = $('#tax');
var $form = $('#form');
var $submit = $('#submit');

function calculate(e) {
	e.preventDefault();
	var $total = $subtotal*$tax;

	if($subtotal.val() > 0 && $tax.val() > 0) {
		$total = true;
	}
}

$submit.on('click', calculate);