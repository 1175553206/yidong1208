/*
* @Author: Administrator
* @Date:   2017-11-07 16:52:40
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-21 22:18:00
*/
window.onload=function(){
   // 导航
	
	let ewbox=document.getElementsByClassName('h-r-kehuduan')[0];

	let ewm=document.getElementsByClassName('erm')[0];
	console.log(ewbox,ewm)
	ewbox.onmouseover=function(){
		ewbox.style.background='#fff';
		ewm.style.display='block';
	}
	ewbox.onmouseout=function(){
		ewbox.style.background='#F2F2F2';
		ewm.style.display='none';
	}




    //首页导航
    let kuang=document.querySelectorAll('.nav-shangbox2');
  	let chu=document.querySelectorAll('.nav-xxk');
  	console.log(kuang.length);
    kuang.forEach(function (val,index) {
        val.onmouseover=function () {
            chu[index].style.display="block";
        }
        val.onmouseout=function () {
            chu[index].style.display="none";
        }
    })




       // 轮播图
    let banner=document.getElementsByClassName("nav-xia-middle")[0];
	let piclist=document.getElementsByClassName("tupian")[0];
	let widths=piclist.offsetWidth;
	let imglist=piclist.getElementsByTagName("li");
	

	let btn=document.getElementsByClassName("bth-list")[0];
	let btns=btn.getElementsByTagName("li");
	console.log(btn,btns);
    btns[0].style.background=" #E8278B";
	let back=document.getElementsByClassName("banner-right")[0];
	let forward=document.getElementsByClassName(" banner-left")[0];

	let flag=true;
	let now=next=0;
	let t;
	t=setInterval(fn, 3000);
	function fn(){
		next++;
		if(next==imglist.length){
			next=0;
		}
		//就位
		imglist[next].style.left=`${widths}px`;
		//imglist[now].style.left="0px";
		//动画
		animate(imglist[now],{left:-widths});
		animate(imglist[next],{left:0},btnfn);
		//更新
		now=next;

	}

	function btnfn(){
		for(let i=0;i<btns.length;i++){
			btns[i].style.background="#E4E4E4";
		}
		btns[now].style.background=" #E8278B";
		flag=true;

	}

	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(fn, 3000);
	}

	back.onclick=function(){
        if(flag){
            fn();
            flag=false;
        }
	}
	forward.onclick=function(){
        if(flag){
            fn1();
            flag=false;
        }
	}



	function fn1(){
		next--;
		if(next==-1){
			next=imglist.length-1;
		}
		imglist[next].style.left=`-${widths}px`;
		animate(imglist[now],{left:widths});
		animate(imglist[next],{left:0},btnfn);

		now=next;
	}

	for(let i=0;i<btns.length;i++){
		btns[i].onclick=function(){
			if(i==now){return}
			else if(i<now){
				animate(imglist[now],{left:widths} );
				animate(imglist[i], {left:0});
				for(let j=0;j<btns.length;j++){
					btns[j].style.background="#E4E4E4";;
				}
				btns[i].style.background=" #E8278B";;
			}
			else if(i>now){
				animate(imglist[now],{left:-widths} );
				animate(imglist[i], {left:0});
				for(let j=0;j<btns.length;j++){
					btns[j].style.background="#E4E4E4";;
				}
				btns[i].style.background=" #E8278B";;
			}
			next=now=i
		}
	}

// 广告轮播  
let jieyh=document.getElementsByClassName('gugao')[0];
	let jiebox=document.getElementsByClassName('guanggao')[0];
	let jie=document.getElementsByClassName('guanggao-box');
	let sons=jiebox.childElementCount;
	console.log(sons);
	let sonw=jiebox.children[2].offsetWidth+parseInt(getComputedStyle(jiebox.children[0],null).marginLeft);
	console.log(sonw);
	jiebox.style.width=`${sons*sonw}px`;
	console.log(jiebox.style.width);
	let btnL=document.getElementsByClassName('yhcx-left')[0];
	let btnR=document.getElementsByClassName('yhcx-right')[0];
	let jienum=0;
	let jiet;
	jiet=setInterval(jiefn,2000);
	btnR.onclick=jiefn;
	btnL.onclick=jiefn1;
	jieyh.onmouseover=function(){
		clearInterval(jiet);
	}
	jieyh.onmouseout=function(){
		jiet=setInterval(jiefn,2000);
	}
	jiebox.style.transition='0.5s';
	function jiefn(){
		jienum++;
		if(jienum==5){
			jienum=0;
		}
		// if(num==-1){
		// 	jiebox.style.transition='0s';
		// }
		jiebox.style.transform=`translateX(-${sonw*jienum}px)`;
	}
	function jiefn1(){
		jienum--;
		if(jienum==-1){
			jienum=4;
		}
		// if(num==-1){
		// 	jiebox.style.transition='0s';
		// }
		jiebox.style.transform=`translateX(-${sonw*jienum}px)`;
	}

// 公告
  let ggbox=document.getElementsByClassName('gg-main')[0];
  	let gg=ggbox.getElementsByTagName('li');
  	console.log(gg.length);
  	let ggleft=document.getElementsByClassName('gg-jian-left');
  	let ggL=ggleft[0];
  	let ggR=ggleft[1];
  	let ggt;
  	let num=0;
  	ggL.onclick=ggfn;
  	ggR.onclick=ggfn1;
  	ggt=setInterval(ggfn,2000);
  	function ggfn(){
  		num+=2;
  		// console.log(num);
  		if(num==4){
  			num=0;
  		}
  		for(let i=0;i<gg.length;i++){
  			gg[i].className='';
  		}
  		gg[num].className='ggli';
  		gg[num+1].className='ggli';
  	}
  	function ggfn1(){
  		num-=2;
  		if(num==-2){
  			num=2;
  		}
  		for(let i=0;i<gg.length;i++){
  			gg[i].className='';
  		}
  		gg[num].className='ggli';
  		gg[num+1].className='ggli';
  	}
  









}
   








