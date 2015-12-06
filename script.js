$(document).ready(function() {
	function showImage(img) {
		console.log(img);
		$('#modal div').append($(img).clone());
		$('#modal').css('visibility', 'visible');
		$('body').css('overflow', 'hidden');
	}

	$('.images img').on('click', function(e) {
		showImage(this);
	});

	$('#modal').on('click', function(e) {
		$('#modal').css('visibility', 'hidden');
		$('#modal img').remove();
		$('body').css('overflow', 'auto');
	});
});