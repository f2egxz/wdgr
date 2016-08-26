/**
 * Created by Administrator on 2016/8/19.
 */
$(function(){
    banner();
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
})
function banner (){
    var imageList = [
        {
            pcImg:'images/big1.jpg',
            mImg:'images/m1.png'
        },
        {
            pcImg:'images/big2.jpg',
            mImg:'images/m1.png'
        },
        {
            pcImg:'images/big1.jpg',
            mImg:'images/m1.png'
        },
        {
            pcImg:'images/big2.jpg',
            mImg:'images/m1.png'
        },
    ]
    var renderHtml = function(){
        var width = $(window).width();
        var isMobile = width >= 768 ? false:true;
        var pointStr = $('#point_template').html();
        var imageStr = $('#image_template').html();
        var pointFuc = _.template(pointStr);
        var imageFuc = _.template(imageStr);
        var pointHtml = pointFuc({model:imageList});
        var imageHtml = imageFuc({model:imageList,isMobile:isMobile});
        $('.carousel-indicators').html(pointHtml);
        $('.carousel-inner').html(imageHtml);
    }
    $(window).on('resize',function(){
        renderHtml();
    }).trigger('resize');

    var startX = 0, moveX = 0 , distanceX = 0 , isMove = false;
    $('.wdgr_banner').on('touchstart',function(e){
        startX = e.originalEvent.touches[0].clientX;
    }).on('touchmove',function(e){
        moveX = e.originalEvent.touches[0].clientX;
        distanceX = moveX - startX;
        isMove = true;
    }).on('touchend',function(e){
        if(isMove && Math.abs(distanceX) > 50){
            if(distanceX > 0){
                $('.carousel').carousel('prev');
            }else{
                $('.carousel').carousel('next');
            }
        }
    });
};

