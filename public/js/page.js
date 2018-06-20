// Document Ready
$(document).ready(function () {

    

});


// Start Equal Height
equalheight = function (container) {

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}


// Window Resize
$(window).on("resize", function () {
    equalheight('class-name');
}).resize();


// Window Load
$(window).load(function (evt) {
    equalheight('class-name');
});

$(document).ready(function(){
    var winh = $(window).outerHeight() - $('header').height();
    $(".content-wrapper").css('min-height', winh);
});
$(window).on('load resize', function(){
    if($(window).width() > 1024){
        $('.member-scroll').niceScroll({horizrailenabled:false});
        $('.nice-scroll').niceScroll({horizrailenabled:false});
    }
});
$('.aside-nav > ul > li').each(function(){
    $(this).children('a.has-child').click(function(){
        $('.aside-nav > ul > li').children('.sub-child').slideUp().parent().removeClass('active');
        if($(this).next('.sub-child').is(':visible')){
            $(this).next('.sub-child').slideUp().parent().removeClass('active');
            console.log('if');
        }
        else{
            $(this).next('.sub-child').slideToggle().parent().toggleClass('active');
            console.log('else');
        }
    });
});

