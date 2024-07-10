$(function () {

    $('.main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 600,
        /*dots: true,*/
        pauseOnHover: false,
    })


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });


    $('.main_product_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
    });

    $('.main_product .arrows .prev').on('click', function () {
        $('.main_product_slide').slick('slickPrev')
    });
    $('.main_product .arrows .next').on('click', function () {
        $('.main_product_slide').slick('slickNext')
    });

    $('.main_event_slide').slick({
        slidesToShow: 5,
        centerMode: true,
        centerPadding: 0,
        arrows: false,
    });

    $('.main_event .arrows .prev').on('click', function () {
        $('.main_event_slide').slick('slickPrev')
    });

    $('.main_event .arrows .next').on('click', function () {
        $('.main_event_slide').slick('slickNext')
    });

    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/eih0jhhKeTE',
        containment: '.main_movie',
        showControls: false,
        playOnlyIfVisible: true,
    });

    let sw = true;

    $('.main_movie .switch').on('clock', function () {
        $(this).toggleClass('on');
        if (sw) {
            $('#bgndVideo').YTPPause();
        } else {
            $('#bgndVideo').YTPPlay();
        }
        sw = !sw;

    })

    $('.main_customer .new .news_menu button').on('click', function () {
        let idx = $(this).parent().index();//0,1
        $('.main_customer .new_content>ul')
            .eq(idx)
            .addClass('on')
            .siblings()
        removeClass('on');

        $(this).parent().addClass('on').siblings().removeClass('on')

    });

    $('.to_top button').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    $(window).on('scrooll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 800) {
            $('.to_top').addClass('on')
        } else {
            $('to_top').removeClass('on')
        }
    });

})