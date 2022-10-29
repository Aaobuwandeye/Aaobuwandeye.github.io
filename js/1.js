$(function(){
    var scrollWidth=sc.offsetWidth*(nav.offsetWidth/show.offsetWidth) //滚动条宽度
    scrol.style.width=scrollWidth+"px"
    show.addEventListener("touchstart",function(e){
        var x=e.targetTouches[0].clientX-show.offsetLeft;
        var y=e.targetTouches[0].clientY-show.offsetTop;
        var dis="";
        var dir;
        function move(e){
            var X=e.targetTouches[0].clientX;
            var Y=e.targetTouches[0].clientY;
            if(dis==""){
                   if(Math.abs(X-x)>5){
                         dis="0"
                   }else if(Math.abs(Y-y)>5){
                         dis="1"
                   }
            }else{
                if(dis==0){
                    dir=X-x
                    show.style.left=dir+"px";
                    scrol.style.left=-sc.offsetWidth*((X-x)/show.offsetWidth)+"px"    //导航移动，滚动条也移动
                    if(parseFloat(show.style.left)<=-nav.offsetWidth){
                        show.style.left=-3.45+"rem"
                        scrol.style.left=sc.offsetWidth-scrol.offsetWidth+"px"
                    }else if(parseFloat(show.style.left)>=0){
                        show.style.left=0+"px"
                        scrol.style.left=0+"px"
                    }
                }
            }
        }
        function end(){
            show.removeEventListener("touchmove",move);
            show.removeEventListener("touchend",end)
        }
        show.addEventListener("touchmove",move)
        show.addEventListener("touchend",end)
    })


   

    //底部导航
    var header=document.getElementsByClassName("heade")
    var fotNav=fot.getElementsByClassName("sp1")
    var bodys=document.getElementsByClassName("bodyy")
    console.log(header)
    for(var n=0;n<fotNav.length;n++){
    fotNav[n].index=n
    fotNav[n].addEventListener("touchstart",function(){
            for(var j=0;j<bodys.length;j++){
                bodys[j].style.display="none"
                fotNav[j].style.color=""
                if(this.index==0){
                   header[0].style.display="block"
                  header[1].style.display="block"
                  
                }else{
                     header[0].style.display="none"
                     header[1].style.display="none"
                }
            }
            bodys[this.index].style.display="block"
             fotNav[this.index].style.color="red"
        })
    }

})