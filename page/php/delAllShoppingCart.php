<?php
    error_reporting(0);
    header("Access-Control-Allow-Origin: *");//这个必写，否则报错
    header("content-type:text/html;charset:utf-8");
    //1.接收数据
    $userPhone=$_GET['userPhone'];
    //2.处理 连接数据库，保存数据
    //1)建立连接
    $con=mysqli_connect("localhost","root","root","anta");
    if(!$con){
        echo "连接数据库失败！";
    }else{
        //3)执行SQL语句
        $sqlstr="DELETE FROM shopcart where userPhone = '$userPhone'";
        $result=mysqli_query($con,$sqlstr);
        if($result){
            echo "1";
        }else{
            echo "0";
        }
    }
?>
