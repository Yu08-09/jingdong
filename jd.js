
let jdTop2=document.querySelector('.top2')
let jdTop=document.querySelector('.top');
jdTop2.onclick=()=>{
    jdTop.style.display='none';
}
let inp=document.querySelector('input')
console.log(inp);
let arr=['笔记本','服饰','珠宝','箱包','相机']
let i=0;
setInterval(function(){
  i++;
  if(i>=arr.length-1){
        i=0;
  }
   inp.placeholder=arr[i];
},2000)
//下拉
let lis=['手机','手表','手链','笔记本','联想笔记本','平板','小米手机'];
let inp1=document.querySelector('.inp');
let xialaul=document.querySelector('.xiala')
console.log(xialaul);
inp1.oninput=function(){
    let val=inp1.value;
    if(val==''||val==' '){
        xialaul.innerHTML='';
        xialaul.style.display='none'
        return
    }   
       xialaul.innerHTML='';
        xialaul.style.display='block'
    for (let i = 0; i < lis.length; i++) {
       if(lis[i].indexOf(val)!==-1){
        xialaul.innerHTML=xialaul.innerHTML+`<li>${lis[i]}</li>`;
       }
    }
}
inp1.onblur=function(){
    xialaul.style.display='none'
}
//轮播图
let imgArr=["./img/1.jpg",'./img/2.jpg','./img/3.jpg','./img/4.jpg','./img/5.jpg','./img/6.jpg','./img/7.jpg']
let zuo=document.querySelector('.zuo');
let you=document.querySelector('.you');
let img=document.querySelector('img');
let lis1=document.querySelectorAll('li')
console.log(lis1);
let index=0;
let index1=0;
//封装函数，照片下标加加
function fun(){
    index++;
    index1--;
    for (let i = 0; i < lis1.length; i++) {
        for (let j = 0; j < lis1.length; j++) {
                    lis1[j].className='';
                }
    if(index>=6||index1<0){
        index=0;
        index1=6;
    }
    lis1[index1].className='li';
    img.src=imgArr[index];
    }
}    
     function fun2(){
        index1++;
        index++;
        for (let i = 0; i < lis1.length; i++) {
            for (let j = 0; j < lis1.length; j++) {
                        lis1[j].className='';
                    }
            if(index1>=6||index>=5){
                index1=0;
                index=0;
               }
      lis1[index1].className='li';
      img.src=imgArr[index];
   }
    }
//计时器
let time=setInterval(fun2,2000);
//移入
img.onmousemove=()=>{
    clearInterval(time);
}
//移出
img.onmouseout=()=>{
    time=setInterval(fun2,2000);
}
//左移
zuo.onclick=()=>{
       fun();
}
you.onclick=()=>{
    fun2();
    index--;
    if(index<0){
        index=5;
    }
    img.src=imgArr[index];
}

for (let i = 0; i < lis1.length; i++) {
    lis1[i].onclick=()=>{
        for (let j = 0; j < lis1.length; j++) {
            lis1[j].className='';
        }
        index++;
        lis1[i]=index;
        if(index>=5){
            index=0;
        }
        lis1[i].className='li'
        img.src=imgArr[index];
    }
}
//京东秒杀
    let bcen=document.querySelectorAll('.bcen>p');
    let p1=document.querySelector('.p1');
    let p2=document.querySelector('.p2');
    let p3=document.querySelector('.p3');
    let p4=document.querySelector('.p4');
    let p5=document.querySelector('.p5');
    let bcen1=document.querySelector('.bcen');
    for (let i = 0; i < bcen.length; i++) {
        bcen[i].onmousemove=()=>{
            bcen[i].style.cssText='background-color:red;color:#fff'
        }
        bcen[i].onmouseout=()=>{
            bcen[i].style.cssText='';
        }
    }
    //滚动事件
    let body=document.querySelector("body");
    body.onscroll=()=>{
        if( document.documentElement.scrollTop>=680&&document.documentElement.scrollTop<=1000){
           hong();
        }else{
             qu();
        }
        //console.log('-------------');
        if( document.documentElement.scrollTop>=1200&&document.documentElement.scrollTop<=2000){
            hong1()
        }else{
            qu1() 
            }
       // console.log('-------------------');
        if( document.documentElement.scrollTop>=2000&&document.documentElement.scrollTop<=2900){
            hong2()
        }else{
            qu2() 
            }
        //console.log('---------------');
        if( document.documentElement.scrollTop>=2900&&document.documentElement.scrollTop<=4000){
            hong3()
        }else{
            qu3() 
            }
        //console.log('-------------------');
        p1.onclick=()=>{
            document.documentElement.scrollTop=700;
        }
        //console.log('-----------------------');
        p2.onclick=()=>{
            document.documentElement.scrollTop=1000;
        }
        //console.log('---------------');
        p3.onclick=()=>{
            document.documentElement.scrollTop=2000;
        }
        //console.log('-------------------');
        p4.onclick=()=>{
            document.documentElement.scrollTop=2900;
        }
        //console.log('-------------');
        if(document.documentElement.scrollTop>1100){
            bcen1.style.top='400px'
            p5.style.display='block'
        }else{
            bcen1.style.top='';
            p5.style.display='none'
        }
        p5.onclick=()=>{
            document.documentElement.scrollTop=0;
        }
        if(document.documentElement.scrollTop>1000){
            div.style.display='block'

        }else{
            div.style.display='none'
        }
    }
    //封装函数，字体颜色变红
    function hong(){
        for (let i = 0; i < bcen.length; i++) {
            bcen[0].style.cssText='color:red'
        } 
    }
   //封装函数 去掉颜色
        function qu(){
            for (let j = 0; j <bcen.length ; j++) {
                bcen[0].style.cssText='';
                }
        }

     //封装函数，字体颜色变红
     function hong1(){
        for (let i = 0; i < bcen.length; i++) {
            bcen[1].style.cssText='color:red'
        } 
    }
   //封装函数 去掉颜色
        function qu1(){
            for (let j = 0; j <bcen.length ; j++) {
                bcen[1].style.cssText='';
                }
        }
     //封装函数，字体颜色变红
     function hong2(){
        for (let i = 0; i < bcen.length; i++) {
            bcen[2].style.cssText='color:red'
        } 
    }
   //封装函数 去掉颜色
        function qu2(){
            for (let j = 0; j <bcen.length ; j++) {
                bcen[2].style.cssText='';
                }
        }
     //封装函数，字体颜色变红
     function hong3(){
        for (let i = 0; i < bcen.length; i++) {
            bcen[3].style.cssText='color:red'
        } 
    }
   //封装函数 去掉颜色
        function qu3(){
            for (let j = 0; j <bcen.length ; j++) {
                bcen[3].style.cssText='';
                }
        }
    //console.log('-------------------');
    
    let a= bcen1.clientHeight;
    console.log(a);
    //京东秒杀
   function ji(){
        let d2=document.querySelector('.d2');
        let d3=document.querySelector('.d3');
        let d4=document.querySelector('.d4');
        let a1=new Date();
        let a2=new Date('2022-09-16 22:22:22');
        let x=a2-a1;
        let y=~~(x/1000/60/60);
        let a3= ~~((x/1000/60/60)%1*60);
        let b=~~((((x/1000/60/60)%1*60)%1)*60);
        b--;
        y=y>9?y:'0'+y;
        a3=a3>9?a3:'0'+a3;
        b=b>9?b:'0'+b;
        if(b==-1){
            b=59;
            a--;
        }
        if(y==0&&a3==0&&b==0){
            clearInterval(timer);
        }
       d2.innerHTML=y;
       d3.innerHTML=a3;
       d4.innerHTML=b;
   }
       ji();
        let timer =setInterval(ji,1000);
    //每日精选
    let xuan=document.querySelectorAll('.a>a');
    let xia=document.querySelectorAll('.xia>div');
    for (let i = 0; i < xuan.length; i++) {
       xuan[i].onmousemove=()=>{
        for (let j = 0; j < xuan.length ; j++) {
            xuan[j].style.cssText='';
            xia[j].style.display='none';
        }
        xuan[i].style.color='red';
        xia[i].style.display='block';
       }
    }
   //吸顶
   let arr1=document.querySelector('.bor');
   let search=arr1.cloneNode(true);
   let div = document.createElement('div');
   let div2 = document.createElement('div');
   div.style.cssText='position: fixed; left: 0px; top: 0px;border-bottom: 1px solid red; width:100%;height:52px; background-color:#fff;display:none'
   div2.className = 'divLogo';
   search.className = 'cloneBor'
   div.appendChild(div2)
    div.appendChild(search)
   document.documentElement.appendChild(div);
    