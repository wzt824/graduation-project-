<?php
    header("Content-type:text/html;charset=utf-8");
    //1.获取数据
    $userphone = $_POST["userphone"];
    $userpassword = $_POST["userpassword"];

    //2.处理
    //2.1)建立连接（搭桥）
    $con = mysql_connect("localhost","root","root");
    if (!$con) {
        echo "连接数据库失败";
    }else {
        //2.2)选择数据库（目的地）
        mysql_select_db("putian",$con);
        //2.3)执行SQL语句(运输数据)
        $sqlValue = "select * form logins where userphone = '$userphone'";
        $sqlresult = mysql_query($sqlValue,$con);
        $rows = mysql_num_rows($sqlresult);
        if($rows>0){ 
            //2.4)关闭程序(过河拆桥)
            mysql_close($con);
            echo "亲，注册失败：用户名已存在";
        }else{
            $sqlValue = "insert into logins(userphone,userpassword) values ('$userphone','$userpassword')";
            $sqlresult = mysql_query($sqlValue,$con);
            //2.4)关闭程序(过河拆桥)
            mysql_close($con);

            //3.响应
            if ($sqlresult) {
                   echo "注册成功！";
                // echo "<script>document.write('亲，恭喜您，注册成功！');location.href='http://www.baidu.com'</script>";
                header("location:index.html");
            }else {
//                 echo "注册失败！";
                header("location:registerF.html");
            }
        }

    }



?>