$("#messageState").on("change", (x) => {
	$(".message").removeClass("openNor").removeClass("closeNor");
	if ($("#messageState").is(":checked")) {
		$(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
		$(".omnitrix").removeClass("closeIt").removeClass("openedIt").addClass("openIt");
		$(".container").stop().animate({"backgroundColor": "#0492c2"}, 2000);
		console.log("Abrindo");
	} else {
		$(".message").removeClass("no-anim").addClass("closeNor");
		$(".omnitrix").removeClass("openIt").removeClass("openedIt").addClass("closeIt");
		$(".container").stop().animate({"backgroundColor": "#0492c2"}, 2000);
		console.log("fechando");
	}
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if ($(".message").hasClass("closeNor"))
		$(".message").addClass("closed");
	$(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".omnitrix").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if (!$(".omnitrix").hasClass("closeIt"))
		$(".omnitrix").addClass("openedIt").addClass("beating");
	else
		$(".omnitrix").addClass("no-anim").removeClass("beating");
	$(".omnitrix").removeClass("openIt").removeClass("closeIt");
});