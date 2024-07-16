$(".flip").click(function () {
    $(this).parents(".img-card__inner").toggleClass("flipped");
});
$(".clickcard").click(function () {
    $(this).toggleClass("flipped");
});