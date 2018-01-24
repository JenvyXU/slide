
let n
初始化()
setInterval(()=>{
    makeLeave(getImage(n)).one('transitionend',(e)=>{
        makeEnter($(e.currentTarget))
    })
/*     $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave').one('transitionend',(e)=>{
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })   */
    makeCurrent(getImage(n+1))
/*    $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current') */
    n+=1  
},3000)




function x(n){
    if(n>3){
        n=n%3
        if(n===0){n=3}
    } //n=1 2 3
    return n
}

function getImage(n){
    return $(`.images > img:nth-child(${x(n)})`)
}
 function 初始化(){
    n=1
    $(`.images>img:nth-child(${n})`).addClass('current').siblings().addClass('enter')
    /*
    $('.images>img:nth-child(1)').addClass('current')
    $('.images>img:nth-child(2)').addClass('enter')
    $('.images>img:nth-child(3)').addClass('enter')
    */   
}

function makeCurrent($node){
    return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
    return $node.removeClass('enter current').addClass('leave')
}
function makeEnter($node){
    return $node.removeClass('leave current').addClass('enter')
}


/*
setTimeout(()=>{
    $('.images>img:nth-child(2)').removeClass('current').addClass('leave').one('transitionend',(e)=>{
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    $('.images>img:nth-child(3)').removeClass('enter').addClass('current')
},6000)

setTimeout(()=>{
    $('.images>img:nth-child(3)').removeClass('current').addClass('leave').one('transitionend',(e)=>{
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    $('.images>img:nth-child(1)').removeClass('enter').addClass('current')
},9000)

setTimeout(()=>{
    $('.images>img:nth-child(1)').removeClass('current').addClass('leave').one('transitionend',(e)=>{
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    $('.images>img:nth-child(2)').removeClass('enter').addClass('current')
},12000)

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
*/