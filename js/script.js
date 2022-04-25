"use strict";

window.onload = function () {
    var elm = ".box";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                    }catch(e){}
                }
            }
             
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
}


$(document).ready(function () {
    function checkWidth() {
        let fontKR = $('.font_examples.adj .font_example');
        let fontEng1 = $('.typo__box.eng .font_example:first-child');
        let fontEng2 = $('.typo__box.eng .font_example:last-child');
        let pageMenu = $('.page_descriptions__list li');
        let overViewText= $('.overview__box.explain .overview__intro');
        let namingConcept=$('.naming__intro .overview__intro')
        let windowSize = $(window).width();
        if (windowSize <= 480) {
            fontKR.text("가나다라마바사아자");
            fontEng1.text('ABCDEFGHIJ');
            fontEng2.text('abcdefghijkl');
            pageMenu.remove();
        }
        if (windowSize <= 905) {
            overViewText.text("10대 여성의 피부 트러블이 시작되는 원인은 성호르몬의 변화로 피지선이 자극되기 때문이죠. 이 시기의 여성들은 외모에 민감한 나이로 트러블 피부로 인한 삶의 질 저하를 경험합니다. RED HEAL은 10대 후반의 여성의 피부 트러블에 특화된 솔루션을 제공합니다.");
        }
        if (windowSize <= 419) {
            $('#hello h1.section_tit').html("안녕하세요. <p>신입 웹퍼블리셔 '이현우'</p>를 소개합니다 ")
        }
    }
    checkWidth();
    $(window).resize(checkWidth);

});