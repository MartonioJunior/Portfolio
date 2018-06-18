$(document).ready(function() {
	$("h1").hide()
	$("button").hide()
	$("img").hide()
	$("h2").hide()
	$("p").hide()
	$("h1").fadeIn(500, function() {
		$("button").fadeIn(500, function() {
			$("img").fadeIn(500, function() {
				$("h2").fadeIn(500, function() {
					$("p").fadeIn(500);
				});
			});
		});
	});

	$("h1").hover(function(event) {
		$("h1").css({
			"color": ''
		});
		$(this).css({
			"color": '#DC0052'
		});
	});

	$("h2").hover(function(event) {
		$("h2").css({
			"color": ''
		});
		$(this).css({
			"color": '#DC0052'
		});
		$(this).animate({
			"padding-top": '10vw'
		}, 2000, function() {
			$(this).animate({
				"padding-top": '0'
			}, 2000);
		});
	});

	$("p").click(function(event) {
		$("p").css({
			"color": ''
		});
		$(this).css({
			"color": '#DC0052'
		});
	});

	$(".nav-item").mouseover(function(event) {
		$(this).animate({
			"opacity": '0.5'
		}, 500)
	});

	$(".nav-item").mouseout(function(event) {
		$(this).animate({
			"opacity": '1.0'
		}, 500)
	});
});