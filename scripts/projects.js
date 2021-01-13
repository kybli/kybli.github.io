$(document).ready(function () {

    var grid = document.querySelector('.grid');
    var msnry = new Masonry( grid, {
    // option,
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    horizontalOrder: true,
    percentPosition: true
    });
    


    $(".card").hover(function () {
        //stuff to do on mouse enter
        console.log("hovering");
        msnry.layout();
    }, 
    function () {
        //stuff to do on mouse leave
        console.log("unhover");
        msnry.layout();
    });


    textfit();
    $(window).on('resize', textfit);

    function textfit() {
        console.log("resizing card text")

        var cardWidth = $(".card").width();

        $(".card-title").css("font-size", cardWidth * (19/(1056 * .3)) + "px");
        $(".card-subtitle").css("font-size", cardWidth * (11/(1056 * .3)) + "px");
        $(".explore").css("font-size", cardWidth * (10/(1056 * .3)) + "px");
        $(".card-content").css("font-size", cardWidth * (15/300) + "px");
    }

});