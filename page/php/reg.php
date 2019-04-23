<?php
	header("Content-type:text/html; charset=utf-8");
	$userphone=$_POST["userphone"];
	$userpassword=$_POST["password"];
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		echo "链接失败";
	}
	else{
		mysql_select_db("anta",$con);
		//1)、查询
		$sqlstr="select * from user where userphone='$userphone'";
		$result = mysql_query($sqlstr,$con);
		$rows = mysql_num_rows($result);
		if($rows<=0){
			//2）、添加
			$sqlstr="insert into user values('$userphone','$userpassword')";
			$result = mysql_query($sqlstr,$con);
			if($result==1){
				echo "1";//注册成功；
			}else{
				echo "0";//注册失败
			}
		}else{
			echo "-1";//注册失败：用户名已经存在，
		}
	}
?>
