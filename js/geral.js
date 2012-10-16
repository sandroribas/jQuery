// jQuery sem conflitos
var $j = jQuery.noConflict();
//USO: $j(document).ready(function(){

//});

$j(document).ready(function(){
	$j('#btn-vermelha').click(function(){
		$j('#cor')	.css('color', '#00CC33');
	});

});
