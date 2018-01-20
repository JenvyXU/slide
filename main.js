setTimeout(function(){
    $('.images>img:nth-child(1)').css({
        transform:'translateX(-100%)'
    })
    $('.images>img:nth-child(2)').css({
        transform:'translateX(-100%)'
    })
    $('.images>img:nth-child(1)').on('transitionend',function(e){
        $(e.currentTarget).addClass('right')
    })

},3000)//加一个延时，太快效果看不出来

setTimeout(function(){
    $('.images>img:nth-child(2)').css({
        transform:'translateX(-200%)'
    })
    $('.images>img:nth-child(3)').css({
        transform:'translateX(-100%)'
    })

},6000)