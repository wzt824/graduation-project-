<?php
	//添加到购物车
	header("Content-Type:text/html;charset=utf-8");
	//1、接受客户端的数据（用户输入的数据）
	$userPhone=$_GET['userPhone'];
    $orderId=$_GET['orderId'];
    $addressName=$_GET['addressName'];
    $addressPhone=$_GET['addressPhone'];
    $address=$_GET['address'];
    $addressCode=$_GET['addressCode'];
    $addressMode=$_GET['addressMode'];
    $sumMoney=$_GET['sumMoney'];

	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysql_connect("localhost","root","root");

	//2）、选择数据库（找目的地）
	if(!mysql_select_db("anta",$conn)){
		die("数据库选择失败".mysql_error());
	};

	//3）、传输数据（过桥）
	$result = mysql_query("select * from orderinfo where userPhone='$userPhone' and orderId='$orderId'",$conn);
	//3.1)先查找该商品是否在购物车中存在
	if(mysql_num_rows($result)>0){
		//如果存在，则使用update语句
		$sqlstr = "UPDATE orderinfo set addressName = '$addressName',addressPhone ='$addressPhone',address = '$address',addressCode ='$addressCode',addressMode = '$addressMode',sumMoney ='$sumMoney' where userPhone='$userPhone' and orderId='$orderId'";
	}else{
		//如果不存在，则使用insert语句
		$sqlstr = "insert into orderinfo values('$userPhone','$orderId','$addressName','$addressPhone','$address','$addressCode','$addressMode','$sumMoney')";
	}

	$result=mysql_query($sqlstr,$conn);
	//4）、关闭连接（拆桥）
	mysql_close($conn);

	if(!$result){
		die("添加失败".mysql_error());
	}

	//3、给客户端返回（响应） 1：表示添加成功 0：表示添加失败
	if($result>0){
		echo 1;
	}else{
		echo 0;
	}
?>
