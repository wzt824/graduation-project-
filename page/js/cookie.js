//设置cookie
function setCookie(cname, cvalue, expdays) {
	var txt = cname + '=' + cvalue;
	if(expdays) {
		var d = new Date();
		d.setDate(d.getDate() + expdays);
		expires = ";expires=" + d.toGMTString();
	}
	document.cookie = txt + expires;
}

//获取cookie
function getCookie(cname) {
	var ca = document.cookie.split(';');
	for(var i in ca) {
		//判断一下,有没有user这个字符串
		if(ca[i].indexOf(cname) != -1) {
			var pattern = /\s/ig;
			var st = ca[i].replace(pattern,'');
			return st.substring(cname.length + 1);
		}
	}
}

//检测cookie
function checkCookie(userphone) {
	// var username = getCookie(user);
	var userphone = getCookie("userphone");
	if(userphone != null) {
		$("#welcomeUesr").css({"display":"block"});
		$("#welcome").html(userphone);
	} else {
		$("#login").css({"display":"block"});
	}
}