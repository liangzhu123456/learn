/**
动态加载模块
一个有事件的对象，都需要绑定监听和取消监听
 */
 var dynamicLoad={},
    height=$(window).height();
 dynamicLoad.init=function () {
     dynamicLoad.addEvent();
 }
 dynamicLoad.addEvent=function () {
     $(window).on('scroll',function () {
        var offset=height+$(window).scrollTop();
        var reserve=$('#J-reserve').offset().top;
        console.log(offset,reserve)
        if(offset>=reserve){
            load();
        }else{
            console.log('未到时候')
        }
     })
 }
 function load() {
     console.log('加载')
 }
dynamicLoad.init();