$(function(){
    //ヘッダーのフェードイン
    $("#drawer_toggle").click(function() {
        $(this).toggleClass("open");
        $("#global_nav").fadeToggle();
    });
});

 //top_h2を3秒かけて表示
$('.top_h2').hide().fadeIn(3000);

//リンクのスクロールアニメーション
$(function(){
  $('a[href^="#"]').click(function(){
    //スクロールのスピード
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
//フェードイン
$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 100) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});

// ボタンの表示／非表示を切り替える関数
const updateButton = () => {
  if ($(window).scrollTop() >= 300) {

    $('.back-to-top').fadeIn();
  } else {
    $('.back-to-top').fadeOut();
  }
};

// スクロールされる度にupdateButtonを実行
$(window).on('scroll', updateButton);

// ボタンをクリックしたらページトップにスクロールする
$('.back-to-top').on('click', (e) => {
  e.preventDefault();

  // 600ミリ秒かけてトップに戻る
  $('html, body').animate({ scrollTop: 0 }, 600);
});

// ページの途中でリロード（再読み込み）された場合でも、ボタンが表示されるようにする
updateButton();

//ページ表示する際に一瞬カルーセルが表示されることを修正
$('.genre_box').fadeIn(300);
//PC画面時のカルーセル
new Vue({
  el: '#carousel',
  components: {
    carousel: VueCarousel.Carousel,
    slide: VueCarousel.Slide,
  },
});
