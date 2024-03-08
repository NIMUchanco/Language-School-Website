$(function () {
    // AOS
    AOS.init();

    //Flag variable to track if countUp() has been executed
    let countUpExecuted = false;

    //Scroll function
    //Header
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $(".page-header").fadeIn(500);
        } else {
            $(".page-header").fadeOut(500);
        }

        //Fade in function
        $('.fadeIn').each(function () {
            let targetElement = $(this).offset().top; //Obtain the distance from top of the page to the element
            let scrollPosition = $(window).scrollTop(); //Obtain the scroll position
            let windowHeight = $(window).height(); //Obtain the window's height
            if (scrollPosition > targetElement - windowHeight) {
                $(this).addClass('slideIn');

                //Count up excute
                if ($(this).hasClass('count-up') && !countUpExecuted) { 
                    countUp();
                    countUpExecuted = true; // Set the flag variable to true to indicate countUp() has been executed
                }
            } else {
                $(this).removeClass('slideIn');
                // Reset the countUpExecuted flag when the element goes out of view
                if ($(this).hasClass('count-up')) {
                countUpExecuted = false;
            }
            }
        });

        //Back-BTN
        if ($(this).scrollTop() > 1000) { //when it's scrolled 1000px
            $('.back-btn').addClass('appearbtn');
        } else {
            $('.back-btn').removeClass('appearbtn');
        }    
    });

    // Count up function
    const counterElement1 = document.querySelector('.counter-class'); //HTML要素を検出・取得
    const targetNumber1 = 210; // カウントアップする目標の数値

    const counterElement2 = document.querySelector('.counter-student');
    const targetNumber2 = 105;

    const counterElement3 = document.querySelector('.counter-teacher');
    const targetNumber3 = 39;

    function countUp() {
        let currentNumber = 0;
        const countInterval = setInterval(function() {
            currentNumber++;
            
            if (currentNumber <= targetNumber1) {
                counterElement1.textContent = currentNumber; //HTMLに要素を返す
            }
            if (currentNumber <= targetNumber2) {
                counterElement2.textContent = currentNumber;
            }
            if (currentNumber <= targetNumber3) {
                counterElement3.textContent = currentNumber;
            }
            if (currentNumber > targetNumber1 && currentNumber > targetNumber2 && currentNumber > targetNumber3) {
                clearInterval(countInterval);
            }
        }, 30);
    }

    //Click function
    // Nav button - toggle
    let btn = document.querySelector(".openbtn");
    let nav = document.querySelector(".nav-menu");

    btn.onclick = function() {
        btn.classList.toggle('openNav');
        nav.classList.toggle('openNav');
    };

    nav.onclick = function() {
        btn.classList.toggle('openNav');
        nav.classList.toggle('openNav');
    };

    $('.nav-menu').click(function() {
        $('.openbtn').removeClass('openNav');
        $('.nav-menu').removeClass('openNav');
    });

    // Modal effect - log in
    $('.login-show').click(function() {
        $('.modal').fadeIn();
        $('.overlay-bl').addClass('show');
    });

    $('.close-modal, .overlay-bl, .signup-show, button').click(function(){
        $('.modal').fadeOut();
        $('.overlay-bl').removeClass('show');
    });

    // Modal effect - sign up
    $('.signup-show').click(function(){
        $('.signup-modal').fadeIn();
        $('.overlay-bl').addClass('show');
    });

    $('.close-modal, .overlay-bl, button').click(function(){
        $('.signup-modal').fadeOut();
        $('.overlay-bl').removeClass('show');
    });

    //Language-bar
    $('.more-btn').click(function(){
        $('.selection').fadeIn(300);
        $('.overlay').addClass('show');
    });

    $('.overlay').click(function(){
        $('.selection').fadeOut(300);
        $('.overlay').removeClass('show');
    });
});