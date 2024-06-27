"use strict";







/* ---------- **********  COMMON  ********** ---------- */


{
    const a = Array.from (document.querySelectorAll (`a:not(.in-video--a__VIDEOCAPT)`));

    a.forEach ((v, i, ar) => {
        ar[i].addEventListener (`click`, (e) => {
            e.preventDefault ();
        })
    })
}







/* ---------- **********  HEADER  ********** ---------- */


{
    //изменение: 
    //1) фона навигационной панели и
    //2) высоты заднего фона шапки мобильного меню
    //при прокрутке

    const header = document.querySelector (`.header`);
    const nav = document.querySelector (`.header--nav`);
    const divBack = document.querySelector (`.header--div__BACK`);

    window.addEventListener (`scroll`, () => {
        if (window.scrollY > 50) {
            header.classList.add (`header__blur`);
            nav.classList.add (`header--nav__blur`);
            divBack.classList.add (`header__scroll`);
        } else {
            header.classList.remove (`header__blur`);
            nav.classList.remove (`header--nav__blur`);
            divBack.classList.remove (`header__scroll`);
        }
    });




    //появление мобильного меню и svg-анимация кнопки-бургера

    const body = document.querySelector (`body`);
    const ul = document.querySelector (`.header--ul`);
    const buttonBurger = document.querySelector (`.header--button__BURGER`);

    const line1 = document.querySelector (`.header--line:first-of-type`);
    const line2 = document.querySelector (`.header--line:nth-of-type(2)`);
    const line3 = document.querySelector (`.header--line:last-of-type`);

    buttonBurger.addEventListener (`click`, () => {
        body.classList.toggle (`body__fixed`);
        ul.classList.toggle (`header__open`);
        divBack.classList.toggle (`header__backopen`);
        line1.classList.toggle (`line1`);
        line2.classList.toggle (`line2`);
        line3.classList.toggle (`line3`);
    });

    


    //появление подменю

    const imgVect = Array.from (document.querySelectorAll (`.header--img__VECT`));
    const ulSub = Array.from (document.querySelectorAll (`.header--ul__SUB`));

    imgVect.forEach ((v, i, a) => {
        a[i].addEventListener (`click`, () => {
            imgVect[i].classList.toggle (`header__rotate`);
            if (i !== 1) {
                ulSub[i].classList.toggle (`header__subopen`);
            } else {
                ulSub[i].classList.toggle (`header__subopen2`);
            }           
        });
    });
}







/* ---------- **********  CHOOSE  ********** ---------- */


{
    //открытие скрытого текста

    const head = Array.from (document.querySelectorAll (`.in-choose--div__HEAD`));
    const imgArr = Array.from (document.querySelectorAll (`.in-choose--img__ARR`));
    const pBody = Array.from (document.querySelectorAll (`.in-choose--p__BODY`));


    head.forEach ((v, i, a) => {
        a[i].addEventListener (`click`, () => {
            imgArr[i].classList.toggle (`in-choose-transform`);
            pBody[i].classList.toggle (`in-choose-open`);
        });
    });
}







/* ---------- **********  TESTIMONIAL  ********** ---------- */


{
    //выбор высказывания человека по клику на аватарке

    const testimonial = document.querySelector (`.in-testimonial`);
    const clients = Array.from (document.querySelectorAll (`.in-testimonial--div__CLIENT`));
    const text = Array.from (document.querySelectorAll (`.in-testimonial--div__TEXT`));



    clients.forEach ((v, i, a) => {
        a[i].addEventListener (`click`, () => {

            a[i].classList.add (`in-testimonial--div__CLIENT_SELECTED`);
            text[i].classList.add (`in-testimonial--div__TEXT_VISIBLE`);

            a.filter ((v1, i1, a1) => {
                return a1[i1] != a[i];
            }).forEach ((v2, i2, a2) => {
                a2[i2].classList.remove (`in-testimonial--div__CLIENT_SELECTED`);
            });

            text.filter ((v1, i1, a1) => {
                return a1[i1] != text[i];
            }).forEach ((v2, i2, a2) => {
                a2[i2].classList.remove (`in-testimonial--div__TEXT_VISIBLE`);
            });

        });
    });



    //закрытие любого окна с высказыванием по клику на пустой области

    testimonial.addEventListener (`click`, (e) => {
        const targs = e.composedPath ();

        for (let v of clients) {
            if (targs.includes (v)) return;
        }

        clients.forEach ((v1, i1, a1) => {
            a1[i1].classList.remove (`in-testimonial--div__CLIENT_SELECTED`);
        })

        text.forEach ((v2, i2, a2) => {
            a2[i2].classList.remove (`in-testimonial--div__TEXT_VISIBLE`);
        });
    });
}







/* ---------- **********  ARTICLES  ********** ---------- */


{
    //слайдер

    const swiper = new Swiper ('.in-articles--div__SWIPER', {
        loop: true,
        
        navigation: {
            nextEl: '.in-articles--button__NEXT',
        },
    
        pagination: {
            el: '.in-articles--div__PAGINATION',
            type: 'bullets',
            clickable: true,
        }
    });
}