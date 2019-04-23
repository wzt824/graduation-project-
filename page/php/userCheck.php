<?php
	header("Content-type:text/html;charset=utf-8");
	
	//1、接收数据
	$userphone = $_GET['userphone'];
	
	//2、处理（连接数据库，保存数据）
	//1)、建立连接（搭桥）
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo "连接数据库失败";
	}else{
		//2）、选择数据库（目的地）
		mysql_select_db("putian",$con);
		
		//3）、执行SQL数据（运输数据）
		$sqlstr="select * from logins where userphone='$userphone'";
		$result = mysql_query($sqlstr,$con);//$result是个表格
		
		//4）、关闭数据库（过河拆桥）
		mysql_close($con);

		//3、响应
		$rows = mysql_num_rows($result);
		if($rows==0){
			echo "1";//可以使用
		}else{
			echo "0";//已经被人使用
		}
	}
?>