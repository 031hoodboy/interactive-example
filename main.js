//https://www.youtube.com/watch?v=lyf7UkkcI1I
//[스타벅스 현대카드] 별이 쏟아지는, 스타벅스 현대카드]

window.onload = function () {

    var app1 = document.querySelector(".app1");
    var app2 = document.querySelector(".app2");
    var app3 = document.querySelector(".app3");
    var app4 = document.querySelector(".app4");
    var app5 = document.querySelector(".app5");

    //스크롤 이벤트
    window.addEventListener("scroll", function (event) {
        // scrollTop = document.documentElement.scrollTop;
        var scroll = this.scrollY;
        // console.log(scrollY / 5)

        app1.style.transform = "translateY(" + -scroll / 7 + "px)";
        app2.style.transform = "translateY(" + -scroll / 2 + "px)";
        app3.style.transform = "translateY(" + -scroll / 3 + "px)";
        app4.style.transform = "translateY(" + -scroll / 4 + "px)";
        app5.style.transform = "translateY(" + -scroll / 5 + "px)";

    });

    //스크롤 이동
    setTimeout(function () {

        window.scrollTo({
            top: document.querySelector('.bottom').offsetTop,
            behavior: 'smooth'
        });
        // document.querySelector('.bottom').scrollIntoView({ behavior: 'smooth' });

    }, 2000)
}