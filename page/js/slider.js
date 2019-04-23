
//第一个轮播图
//项目中有哪些类：轮播图
function Slider(
				boxDomObj,width,height,imgs,
				doudouWidth,doudouHight,doudouColor,doudouHighColor,
				isCircle,direction,timeSpace){
	this.boxDomObj = boxDomObj;//轮播图的容器
	this.imgDoms = [];//存储所有的img标签,DOM对象
	this.liDoms = [];//存储所有的li标签,DOM对象
	this.width = width;
	this.height = height;
	this.imgs = imgs;//图片数组
	this.doudouWidth = doudouWidth;
	this.doudouHight = doudouHight;
	this.doudouColor = doudouColor;
	this.doudouHighColor = doudouHighColor;//高亮颜色
	this.isCircle = isCircle;

	this.direction = direction;//左还是右
	this.timeSpace = timeSpace;//每张图片直接的间隔,大于1000
	this.currOrd = 0;
	this.myTimer = null;
	this.num = 0;

	this.createUI();
	this.addEvent();
	this.changeImg();
}

Slider.prototype.createUI= function(){
	this.boxDomObj.style.position = "relative";
	this.boxDomObj.style.overflow = "hidden";
	//1、创建所有的图片
	for(let i=0;i<this.imgs.length;i++){
		let imgDom = document.createElement("img");
		imgDom.src = this.imgs[i];
		imgDom.style.cssText = "position:absolute;top:0px;";
		imgDom.style.width = this.width+"px";
		imgDom.style.height = this.height+"px";
		if(i==0){
			imgDom.style.left = "0px";
		}else{
			imgDom.style.left = this.width+"px";
		}
		this.boxDomObj.appendChild(imgDom);
		this.imgDoms.push(imgDom);//把创建的图片标签放入数组中
	}
	//2、创建所有的豆豆
	//1)、豆豆的容器
	let ulDom = document.createElement("ul");
	ulDom.style.cssText = "position:absolute;right:30%;bottom:10px;list-style:none;z-index:2;opacity:.7;font-size:12px;color:white;text-align:center;line-height:30px;";
	this.boxDomObj.appendChild(ulDom);
	//2)、豆豆
	for(let i=0;i<this.imgs.length;i++){
		let textArray = ["放肆街头","KT4新品首发","潮流套装","闪能科技跑鞋"];
		let liDom = document.createElement("li");
		liDom.style.cssText = "float:left;margin-left:1px;";
		liDom.style.width = this.doudouWidth+"px";
		liDom.style.height = this.doudouHight+"px";
		if(i==0){
			liDom.style.backgroundColor = this.doudouHighColor;
		}else{
			liDom.style.backgroundColor = this.doudouColor;
		}
		liDom.innerHTML = textArray[i];
		ulDom.appendChild(liDom);
		this.liDoms.push(liDom);
	}
	//创建箭头
	let banLeft = document.createElement("div");
	banLeft.style.cssText = "width: 23px;height: 42px;position: absolute;top: 0;bottom: 0;margin: auto 0;z-index: 24;cursor: pointer;left: 50px;background: url(img/banner_l.png);";
	this.boxDomObj.appendChild(banLeft);
	let banRight = document.createElement("div");
	banRight.style.cssText = "width: 23px;height: 42px;position: absolute;top: 0;bottom: 0;margin: auto 0;z-index: 24;cursor: pointer;right: 50px;background: url(img/banner_r.png);";
	this.boxDomObj.appendChild(banRight);
	banRight.onclick = ()=>{
		this.num++;
		if(this.num<=3){
			this.goImg(this.num);
		}else{
			this.num=-1;
		}
	}
	banLeft.onclick = ()=>{
		this.num--;
		if(this.num >= 0){
			this.goImg(this.num);
		}else{
			this.num=4
		}
	}
}

Slider.prototype.showImg = function(inOrd,outOrd){

	if(inOrd==outOrd){
		return;
	}

	//1)、滑入滑出前的准备工作
	this.imgDoms[inOrd].style.left = this.width+"px";

	//2）、滑入滑出效果
	moveObj05(this.imgDoms[inOrd],"left",0,300);
	moveObj05(this.imgDoms[outOrd],"left",-1*this.width,300);
}


Slider.prototype.showLi=function(){
	//    B、改豆豆
	for(let i=0;i<this.liDoms.length;i++){
		this.liDoms[i].style.backgroundColor = this.doudouColor;
	}
	this.liDoms[this.currOrd].style.backgroundColor = this.doudouHighColor;
}

//1、自动播放图片
Slider.prototype.changeImg=function(){

	this.myTimer = setInterval(()=>{
		//1）、数据：改变图片的当前序号（加加），并考虑边界
		//currOrd = ++currOrd>4?0:currOrd;
		let outOrd = this.currOrd;
		this.currOrd++;
		if(this.currOrd>this.imgs.length-1){
			this.currOrd=0;
		}
		this.num = this.currOrd;

		//2）、外观：
		//A、改图片
		this.showImg(this.currOrd,outOrd);
		//B、改豆豆
		this.showLi();

	},this.timeSpace);
}

//2、停止播放
Slider.prototype.stopChange=function(){
	//停止定时器
	window.clearInterval(this.myTimer);
}

//4、跳转到指定的图片
Slider.prototype.goImg=function(transOrd){//1
	//1）、数据：把transOrd赋给当前图片序号
	let outOrd = this.currOrd;
	this.currOrd = transOrd;

	//2）、外观：
	//A、改图片
	this.showImg(this.currOrd,outOrd);
	//B、改豆豆
	this.showLi();
}


Slider.prototype.addEvent = function(){
	let obj = this;//this是Slider的对象
	this.boxDomObj.onmouseenter = function(){
		obj.stopChange();
	}
	this.boxDomObj.onmouseleave = function(){
		obj.changeImg();
	}

	for(let i=0;i<this.liDoms.length;i++){
		this.liDoms[i].onclick = ()=>{
			this.num = i;
			this.goImg(i);
		}
	}
}



//第二个轮播图

//项目中有哪些类：轮播图
function SliderMin(
	boxDomObj,width,height,imgs,
	doudouSize,doudouColor,doudouHighColor,
	isCircle,direction,timeSpace){
		this.boxDomObj = boxDomObj;//轮播图的容器
		this.imgDoms = [];//存储所有的img标签,DOM对象
		this.liDoms = [];//存储所有的li标签,DOM对象
		this.liBoxDoms = [];//存储所有带有内容的li标签,DOM对象
		this.width = width;
		this.height = height;
		this.height1 = 152;
		this.imgs = imgs;//图片数组
		this.doudouSize = doudouSize;
		this.doudouColor = doudouColor;
		this.doudouHighColor = doudouHighColor;//高亮颜色
		this.isCircle = isCircle;

		this.direction = direction;//左还是右
		this.timeSpace = timeSpace;//每张图片直接的间隔,大于1000
		this.currOrd = 0;
		this.myTimer = null;
		this.num = 0;


		this.createUI();
		this.addEvent();
		this.changeImg();
	}

	SliderMin.prototype.createUI= function(){
		this.boxDomObj.style.position = "relative";
		this.boxDomObj.style.overflow = "hidden";
		//1、创建所有的图片
		for(let i=0;i<this.imgs.length;i++){
			let imgDom = document.createElement("img");
			imgDom.src = this.imgs[i];
			imgDom.style.cssText = "position:absolute;top:0px;";
			imgDom.style.width = this.width+"px";
			imgDom.style.height = this.height+"px";
				if(i==0){
					imgDom.style.left = "0px";
				}else{
					imgDom.style.left = this.width+"px";
				}
			this.boxDomObj.appendChild(imgDom);
			this.imgDoms.push(imgDom);//把创建的图片标签放入数组中
		}
		//2、创建所有的豆豆
		//1)、豆豆的容器
		let ulDom = document.createElement("ul");
		ulDom.style.cssText = "position:absolute;right:44%;bottom:180px;list-style:none;z-index:2;cursor:pointer;";
		this.boxDomObj.appendChild(ulDom);
		//2)、豆豆
		for(let i=0;i<this.imgs.length;i++){
			let liDom = document.createElement("li");
			liDom.style.cssText = "float:left;margin-left:20px;";
			liDom.style.width = this.doudouSize+"px";
			liDom.style.height = this.doudouSize+"px";
				if(i==0){
					liDom.style.backgroundColor = this.doudouHighColor;
				}else{
					liDom.style.backgroundColor = this.doudouColor;
				}
				if(this.isCircle){
					liDom.style.borderRadius = "50%";
				}
			ulDom.appendChild(liDom);
			this.liDoms.push(liDom);
		}
		//创建内容
		let ulBoxsDoms = document.createElement("div");
		ulBoxsDoms.id = "ulBoxsDoms";
		// ulBoxsDoms.style.cssText = "background:blue;width:1749px;height:152px;position:absolute;left:0;bottom:0;list-style:none;z-index:2;cursor:pointer;";
		ulBoxsDoms.style.cssText = "width:1749px;position:absolute;bottom:0;cursor:pointer;z-index:2;";

		//2)、
		for(let i=0;i<this.imgs.length;i++){
			let divtArray = [];

			let liDomls = document.createElement("li");
			liDomls.id = "contantlis";
			liDomls.style.cssText = "float:left;position:absolute;bottom:0;left:583px;";
			liDomls.style.width = this.width+"px";
			liDomls.style.height = this.height1+"px";
			if(i==0){
				liDomls.style.left = "0px";
			}else{
				liDomls.style.left = this.width+"px";
			}
			//创建
			//商品轮播图开始
			let shuju1 = "";
			let shuju2 = "";
			let shuju3 = "";
			shuju1 = '<div id="contants">\
			    <h3>要疯篮球鞋</h3>\
			    <p>2018新款要疯篮球鞋</p>\
			    <div class="showMin">\
			        <a href="javascript:;" class="textChange">立即选购</a>\
			        <div class="showMinLayer"></div>\
			    </div>\
			</div>';
			shuju2 = '<div id="contants">\
			    <h3>闪能科技跑鞋</h3>\
			    <p>轻盈设计，双密度缓震，享受跑步，乐在其中</p>\
			    <div class="showMin">\
			        <a href="javascript:;" class="textChange">立即选购</a>\
			        <div class="showMinLayer"></div>\
			    </div>\
			</div>';
			shuju3 = '<div id="contants">\
			    <h3>A-WING休闲鞋</h3>\
			    <p>高弹大底结合弹性飞织帮面，舒适升级</p>\
			    <div class="showMin">\
			        <a href="javascript:;" class="textChange">立即选购</a>\
			        <div class="showMinLayer"></div>\
			    </div>\
			</div>';
			divtArray[0] = shuju1;
			divtArray[1] = shuju2;
			divtArray[2] = shuju3;
			liDomls.innerHTML = divtArray[i];
			ulBoxsDoms.appendChild(liDomls);
			this.liBoxDoms.push(liDomls);


		}
		this.boxDomObj.appendChild(ulBoxsDoms);


		//创建箭头
		let banLeft = document.createElement("div");
		banLeft.id = "conceal";
		banLeft.style.cssText = "width: 23px;height: 42px;position: absolute;top: 35%;z-index: 24;cursor: pointer;left: 20px;background: url(img/banner_l.png);";
		this.boxDomObj.appendChild(banLeft);
		let banRight = document.createElement("div");
		banRight.id = "conceal";
		banRight.style.cssText = "width: 23px;height: 42px;position: absolute;top: 35%;z-index: 24;cursor: pointer;right: 20px;background: url(img/banner_r.png);";
		this.boxDomObj.appendChild(banRight);
		banRight.onclick = ()=>{
			this.num++;
			if(this.num<3){
				this.goImg(this.num);
			}else{
				this.num=-1;
			}
		}
		banLeft.onclick = ()=>{
			this.num--;
			if(this.num > -1){
				this.goImg(this.num);
			}else{
				this.num=3;
			}
		}
	}

	SliderMin.prototype.showImg = function(inOrd,outOrd){

		if(inOrd==outOrd){
			return;
		}

		//1)、滑入滑出前的准备工作
		this.imgDoms[inOrd].style.left = this.width+"px";

		//2）、滑入滑出效果
		moveObj05(this.imgDoms[inOrd],"left",0,300);
		moveObj05(this.imgDoms[outOrd],"left",-1*this.width,300);
	}

	SliderMin.prototype.showLi=function(){
	//    B、改豆豆
		for(let i=0;i<this.liDoms.length;i++){
			this.liDoms[i].style.backgroundColor = this.doudouColor;
		}
		this.liDoms[this.currOrd].style.backgroundColor = this.doudouHighColor;
	}
	SliderMin.prototype.showDiv=function(inOrd,outOrd){
		if(inOrd==outOrd){
			return;
		}
	//    3、改盒子
		this.liBoxDoms[inOrd].style.left = this.width+"px";
		//2）、滑入滑出效果
		moveObj05(this.liBoxDoms[inOrd],"left",0,300);
		moveObj05(this.liBoxDoms[outOrd],"left",-1*this.width,300);
	}

	//1、自动播放图片
	SliderMin.prototype.changeImg=function(){

		this.myTimer = setInterval(()=>{
			//1）、数据：改变图片的当前序号（加加），并考虑边界
			//currOrd = ++currOrd>4?0:currOrd;
			let outOrd = this.currOrd;
			this.currOrd++;
			if(this.currOrd>this.imgs.length-1){
				this.currOrd=0;
			}

			//2）、外观：
			//A、改图片
			this.showImg(this.currOrd,outOrd);

			this.showDiv(this.currOrd,outOrd);
			//B、改豆豆
			this.showLi();

		},this.timeSpace);
	}

	//2、停止播放
	SliderMin.prototype.stopChange=function(){
	//停止定时器
		window.clearInterval(this.myTimer);
	}

	//4、跳转到指定的图片
	SliderMin.prototype.goImg=function(transOrd){//1
		//1）、数据：把transOrd赋给当前图片序号
		let outOrd = this.currOrd;
		this.currOrd = transOrd;

		//2）、外观：
		//A、改图片
		this.showImg(this.currOrd,outOrd);

		this.showDiv(this.currOrd,outOrd);
		//B、改豆豆
		this.showLi();
	}

	SliderMin.prototype.addEvent = function(){
		let obj = this;//this是Slider的对象
		this.boxDomObj.onmouseover = function(){
			obj.stopChange();
		}
		this.boxDomObj.onmouseout = function(){
			obj.changeImg();
		}

		for(let i=0;i<this.liDoms.length;i++){
			this.liDoms[i].onclick = ()=>{
			this.goImg(i);
		}
	}
}

//第三个轮播图

//项目中有哪些类：轮播图
function SliderMinTwo(
	boxDomObj,width,height,imgs,
	doudouSize,doudouColor,doudouHighColor,
	isCircle,direction,timeSpace){
		this.boxDomObj = boxDomObj;//轮播图的容器
		this.imgDoms = [];//存储所有的img标签,DOM对象
		this.liDoms = [];//存储所有的li标签,DOM对象
		this.liBoxDoms = [];//存储所有带有内容的li标签,DOM对象
		this.width = width;
		this.height = height;
		this.height1 = 152;
		this.imgs = imgs;//图片数组
		this.doudouSize = doudouSize;
		this.doudouColor = doudouColor;
		this.doudouHighColor = doudouHighColor;//高亮颜色
		this.isCircle = isCircle;

		this.direction = direction;//左还是右
		this.timeSpace = timeSpace;//每张图片直接的间隔,大于1000
		this.currOrd = 0;
		this.myTimer = null;
		this.num = 0;


		this.createUI();
		this.addEvent();
		this.changeImg();
	}

	SliderMinTwo.prototype.createUI= function(){
		this.boxDomObj.style.position = "relative";
		this.boxDomObj.style.overflow = "hidden";
		//1、创建所有的图片
		for(let i=0;i<this.imgs.length;i++){
			let imgDom = document.createElement("img");
			imgDom.src = this.imgs[i];
			imgDom.style.cssText = "position:absolute;top:0px;";
			imgDom.style.width = this.width+"px";
			imgDom.style.height = this.height+"px";
				if(i==0){
					imgDom.style.left = "0px";
				}else{
					imgDom.style.left = this.width+"px";
				}
			this.boxDomObj.appendChild(imgDom);
			this.imgDoms.push(imgDom);//把创建的图片标签放入数组中
		}
		//2、创建所有的豆豆
		//1)、豆豆的容器
		let ulDom = document.createElement("ul");
		ulDom.style.cssText = "position:absolute;right:44%;bottom:180px;list-style:none;z-index:2;cursor:pointer;";
		this.boxDomObj.appendChild(ulDom);
		//2)、豆豆
		for(let i=0;i<this.imgs.length;i++){
			let liDom = document.createElement("li");
			liDom.style.cssText = "float:left;margin-left:20px;";
			liDom.style.width = this.doudouSize+"px";
			liDom.style.height = this.doudouSize+"px";
				if(i==0){
					liDom.style.backgroundColor = this.doudouHighColor;
				}else{
					liDom.style.backgroundColor = this.doudouColor;
				}
				if(this.isCircle){
					liDom.style.borderRadius = "50%";
				}
			ulDom.appendChild(liDom);
			this.liDoms.push(liDom);
		}
		//创建内容
		let ulBoxsDoms = document.createElement("div");
		ulBoxsDoms.id = "ulBoxsDoms";
		// ulBoxsDoms.style.cssText = "background:blue;width:1749px;height:152px;position:absolute;left:0;bottom:0;list-style:none;z-index:2;cursor:pointer;";
		ulBoxsDoms.style.cssText = "width:1749px;position:absolute;bottom:0;cursor:pointer;z-index:2;";

		//2)、
		for(let i=0;i<this.imgs.length;i++){
			let divtArray = [];

			let liDomls = document.createElement("li");
			liDomls.id = "contantlis";
			liDomls.style.cssText = "float:left;position:absolute;bottom:0;left:583px;";
			liDomls.style.width = this.width+"px";
			liDomls.style.height = this.height1+"px";
			if(i==0){
				liDomls.style.left = "0px";
			}else{
				liDomls.style.left = this.width+"px";
			}
			//创建
			//商品轮播图开始
			let shuju1 = "";
			let shuju2 = "";
			let shuju3 = "";
			shuju1 = '<div id="contants">\
			    <h3>A-SPORTS 秋季尚新</h3>\
			    <p>新升级运动减菌面料、轻质有型，让你运动中激发潜能，提升运动表现。</p>\
			    <div class="showMin">\
			        <a href="javascript:;" class="textChange">立即选购</a>\
			        <div class="showMinLayer"></div>\
			    </div>\
			</div>';
			shuju2 = '<div id="contants">\
			    <h3>A-SPORTS 秋季尚新</h3>\
			    <p>拥有一颗运动的心永不止步，每一步都是最美的姿态</p>\
			    <div class="showMin">\
			        <a href="javascript:;" class="textChange">立即选购</a>\
			        <div class="showMinLayer"></div>\
			    </div>\
			</div>';
			shuju3 = '<div id="contants">\
			    <h3>遇见未见的自己</h3>\
			    <p>ANTA女子运动装备，炼造自我，运动让你更爱自己</p>\
			    <div class="showMin">\
			        <a href="javascript:;" class="textChange">立即选购</a>\
			        <div class="showMinLayer"></div>\
			    </div>\
			</div>';
			divtArray[0] = shuju1;
			divtArray[1] = shuju2;
			divtArray[2] = shuju3;
			liDomls.innerHTML = divtArray[i];
			ulBoxsDoms.appendChild(liDomls);
			this.liBoxDoms.push(liDomls);


		}
		this.boxDomObj.appendChild(ulBoxsDoms);


		//创建箭头
		let banLeft = document.createElement("div");
		banLeft.id = "conceal";
		banLeft.style.cssText = "width: 23px;height: 42px;position: absolute;top: 35%;z-index: 24;cursor: pointer;left: 20px;background: url(img/banner_l.png);";
		this.boxDomObj.appendChild(banLeft);
		let banRight = document.createElement("div");
		banRight.id = "conceal";
		banRight.style.cssText = "width: 23px;height: 42px;position: absolute;top: 35%;z-index: 24;cursor: pointer;right: 20px;background: url(img/banner_r.png);";
		this.boxDomObj.appendChild(banRight);
		banRight.onclick = ()=>{
			this.num++;
			if(this.num<3){
				this.goImg(this.num);
			}else{
				this.num=-1;
			}
		}
		banLeft.onclick = ()=>{
			this.num--;
			if(this.num > -1){
				this.goImg(this.num);
			}else{
				this.num=3;
			}
		}
	}

	SliderMinTwo.prototype.showImg = function(inOrd,outOrd){

		if(inOrd==outOrd){
			return;
		}

		//1)、滑入滑出前的准备工作
		this.imgDoms[inOrd].style.left = this.width+"px";

		//2）、滑入滑出效果
		moveObj05(this.imgDoms[inOrd],"left",0,300);
		moveObj05(this.imgDoms[outOrd],"left",-1*this.width,300);
	}

	SliderMinTwo.prototype.showLi=function(){
	//    B、改豆豆
		for(let i=0;i<this.liDoms.length;i++){
			this.liDoms[i].style.backgroundColor = this.doudouColor;
		}
		this.liDoms[this.currOrd].style.backgroundColor = this.doudouHighColor;
	}
	SliderMinTwo.prototype.showDiv=function(inOrd,outOrd){
		if(inOrd==outOrd){
			return;
		}
	//    3、改盒子
		this.liBoxDoms[inOrd].style.left = this.width+"px";
		//2）、滑入滑出效果
		moveObj05(this.liBoxDoms[inOrd],"left",0,300);
		moveObj05(this.liBoxDoms[outOrd],"left",-1*this.width,300);
	}

	//1、自动播放图片
	SliderMinTwo.prototype.changeImg=function(){

		this.myTimer = setInterval(()=>{
			//1）、数据：改变图片的当前序号（加加），并考虑边界
			//currOrd = ++currOrd>4?0:currOrd;
			let outOrd = this.currOrd;
			this.currOrd++;
			if(this.currOrd>this.imgs.length-1){
				this.currOrd=0;
			}

			//2）、外观：
			//A、改图片
			this.showImg(this.currOrd,outOrd);

			this.showDiv(this.currOrd,outOrd);
			//B、改豆豆
			this.showLi();

		},this.timeSpace);
	}

	//2、停止播放
	SliderMinTwo.prototype.stopChange=function(){
	//停止定时器
		window.clearInterval(this.myTimer);
	}

	//4、跳转到指定的图片
	SliderMinTwo.prototype.goImg=function(transOrd){//1
		//1）、数据：把transOrd赋给当前图片序号
		let outOrd = this.currOrd;
		this.currOrd = transOrd;

		//2）、外观：
		//A、改图片
		this.showImg(this.currOrd,outOrd);

		this.showDiv(this.currOrd,outOrd);
		//B、改豆豆
		this.showLi();
	}

	SliderMinTwo.prototype.addEvent = function(){
		let obj = this;//this是Slider的对象
		this.boxDomObj.onmouseover = function(){
			obj.stopChange();
		}
		this.boxDomObj.onmouseout = function(){
			obj.changeImg();
		}

		for(let i=0;i<this.liDoms.length;i++){
			this.liDoms[i].onclick = ()=>{
			this.goImg(i);
		}
	}
}
