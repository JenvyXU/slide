setTimeout(function(){
    $('.images>img:nth-child(1)').css({
        transform:'translateX(-100%)'
    })
    $('.images>img:nth-child(2)').css({
        transform:'translateX(-100%)'
    })
    $('.images>img:nth-child(1)').one('transitionend',function(e){
        $(e.currentTarget).css({transform:'none'}).addClass('right')
    })

},3000)//加一个延时，太快效果看不出来

setTimeout(function(){
    $('.images>img:nth-child(2)').css({
        transform:'translateX(-200%)'
    })
    $('.images>img:nth-child(3)').css({
        transform:'translateX(-100%)'
    })
    $('.images>img:nth-child(2)').one('transitionend',function(e){
        $(e.currentTarget).css({transform:'none'}).addClass('right')
    })
    //one监听一次，监听完以后马上把监听器干掉

},6000)

setTimeout(function(){
    $('.images>img:nth-child(3)').css({
        transform:'translateX(-200%)'
    })
    $('.images>img:nth-child(1)').css({
        transform:'translateX(-100%)'
    })
    $('.images>img:nth-child(3)').one('transitionend',function(e){
        $(e.currentTarget).css({transform:'none'}).addClass('right')
    })

},9000)

setTimeout(function(){
    $('.images>img:nth-child(1)').css({
        transform:'translateX(-200%)'
    })
    $('.images>img:nth-child(2)').css({
        transform:'translateX(-100%)'
    })
    $('.images>img:nth-child(1)').one('transitionend',function(e){
        $(e.currentTarget).css({transform:'none'}).addClass('right')
    })

},12000)