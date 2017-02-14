$(function() {
	$('.chart1').hide();
	$("[name=chartSelection]").click(function(){
			$('.chart1').hide();
			$("#chart"+$(this).val()).show();
			
	});
 });