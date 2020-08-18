$(document).ready(function(){
    $('.slide').each(function(){
        var ulWidth = $(this).width(); //ulの幅
        var ulHeight = $(this).height(); //ulの高さ

        $(this).children('ul').wrapAll('<div id="loopslider_wrap"></div>');
        var listWidth = $('#loopslider_wrap').children('ul').children('li').width(); //liの幅
        var listCount = $('#loopslider_wrap').children('ul').children('li').length; //liの数
        
        var loopWidth = (listWidth)*(listCount);　//スライドの長さ

        $('#loopslider_wrap').css({　//スライドさせる素材全体の長さ
        top: '0',
        left: '0',
        width: ((loopWidth) * 2),
        height: (ulHeight),
        overflow: 'hidden',
        position: 'absolute',
        display :'flex'
        });

        $('#loopslider_wrap ul').css({
        width: (loopWidth)
        });
        loopsliderPosition();

        function loopsliderPosition(){
        $('#loopslider_wrap').css({left:'0'});
        $('#loopslider_wrap').stop().animate({left:'-' + (loopWidth) + 'px'},25000,'linear');　//アニメーション
        setTimeout(function(){
            loopsliderPosition(); //繰り返し実行　29行目と間隔合わせる
        },25000);
        };

        $('#loopslider_wrap ul').clone().appendTo('#loopslider_wrap');

    });
});