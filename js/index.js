let time=setInterval(function(){
    let imgs=document.getElementsByTagName('img')
    let box=document.getElementById('box')
    let whidth=document.getElementById('boxx')
    let loding=document.getElementById('log')
    let go=document.getElementById('go')

    let num=0
    imgs_len = imgs.length //照片总数
    loaded = 0 //已加载照片个数

    load_callback = function(){
        loaded++;
        num = parseInt(loaded/imgs_len*100) + "%"; 
        go.style.left=num //购物车进度
        whidth.style.width=num; //进度条进度
        if(loaded === imgs_len){
             clearInterval(time)
             setTimeout(function(){
                loding.style.display = "none"
             },100)
        };
    };

    for(let i=0;i<imgs.length;i++){
        if(imgs[i].complete == true){//图片已加载完成
            load_callback();
        }else{
            imgs[i].onload= function(){//图片动态加载完成触发
            load_callback();
        }
        }
    }

},500)


window.onload=function(){
    //创建一个新的hammer对象并且在初始化时指定要处理的dom元素
  let btn = new Hammer(document.getElementById("butt"));
    //首页按钮，添加事件
    btn.on("tap", function(e) {

        let page=document.getElementById('page')
        page.style.top="-100%"
        page.style.opacity="0"
    });
   //遮罩
   let zhe = new Hammer(document.getElementById("zhe"));
   zhe.on('tap',function(e){
      document.getElementById("zhe").style.display="none"
   })  

   //点击选择物品
   //选择图标出现
   let imgs=document.getElementsByClassName('imgg')
   let cirs=document.getElementsByClassName('cir')
   let sum=document.getElementById('ss')
   let num=document.getElementById('num')
   let end=document.getElementById('en')
   let imgIndexArr=[]
   let zahuodian=0
   let fuzhuangdian=0
   let wenjudian=0
   let yaodian=0
   let jingpindian=0
   let shumadian=0
   let imgSrc=[]
   //选择商品功能
   for(let n=0;n<imgs.length;n++){
     let img = new Hammer(imgs[n]);
     img.indexx=n
     img.on('tap',function(){
       //判断是否已经选择图片
       let i=imgIndexArr.indexOf(img.indexx)
       //判断是否已经保存图片路径
       let s=imgSrc.indexOf(imgs[img.indexx].src||"")
       if(i!=-1){
          //已经选择再次点击，则代表取消选择
          cirs[img.indexx].style.opacity="0"
          //删除图片和图片路径
          imgIndexArr.splice(i,1)
          imgSrc.splice(s,1)
          num.innerHTML=imgIndexArr.length
          //判断是哪个店铺
            if(img.indexx>=0&&img.indexx<=4){
                zahuodian--
            }else if(img.indexx>=5&&img.indexx<=9){
                fuzhuangdian--
            }else if(img.indexx>=10&&img.indexx<=14){
                wenjudian--
            }else if(img.indexx>=15&&img.indexx<=19){
                yaodian--
            }else if(img.indexx>=20&&img.indexx<=24){
                jingpindian--
            }else{
                shumadian--
            } 
       }else{
          cirs[img.indexx].style.opacity="1"
          //添加图片和图片路径
          imgIndexArr.push(img.indexx)
          num.innerHTML=imgIndexArr.length 
          imgSrc.push(imgs[img.indexx].src)
          //判断是哪个店铺
            if(img.indexx>=0&&img.indexx<=4){
                zahuodian++
            }else if(img.indexx>=5&&img.indexx<=9){
                fuzhuangdian++
            }else if(img.indexx>=10&&img.indexx<=14){
                wenjudian++
            }else if(img.indexx>=15&&img.indexx<=19){
                yaodian++
            }else if(img.indexx>=20&&img.indexx<=24){
                jingpindian++
            }else{
                shumadian++
            }
       }
       //显示按钮
       sum.style.opacity="1"
       end.style.opacity="1"
     })
   }

   
   let now=""
   let noww=""
   let xingGe=[['兴趣广泛的','好奇宝宝'],['拿捏「潮」向的','元气icon'],['读书破万卷','自律狂人'],['我命由我的','硬核养生人'],['仪式感拉满的','精致天花板'],['技能满格的','头号玩家']]
   let suiJi=[['技能满格的','宝藏青年'],['人设成谜的','天选神秘人']]
     
   //完成按钮功能
     let butt = new Hammer(document.getElementById('en'));
     butt.on('tap',function(){
    //整合，比较哪个店铺选择的数量最高和最低
     let he=[zahuodian,fuzhuangdian,wenjudian,yaodian,jingpindian,shumadian]
     
     //获取选取的最大数量和最小
     let max=Math.max(...he)
     let min=Math.min(...he)
     if(max-min>=3){
        now=xingGe[he.indexOf(max)][0]
        noww=xingGe[he.indexOf(max)][1]
     }else{
        now=suiJi[Math.round(Math.random())][0]
        noww=suiJi[Math.round(Math.random())][1]
     }
        let xuanze=document.getElementById('xuan')
        xuanze.style.top="-100%"
    
    //分享页面动态插入图片
     let wrap=document.getElementById('wra')
     for(let n=0;n<imgSrc.length;n++){
        let img=document.createElement("img");
        wrap.appendChild(img)
        img.src=`${imgSrc[n]}`
      }
      //性格
      let xingge=document.getElementById('xingge')
      let xinggee=document.getElementById('xinggee')
      xingge.innerHTML=now
      xinggee.innerHTML=noww
     })
   
}
    
