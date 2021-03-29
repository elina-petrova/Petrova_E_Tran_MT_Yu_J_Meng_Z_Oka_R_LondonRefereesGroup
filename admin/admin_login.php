<?php
require_once '../load.php';

$ip = $_SERVER['REMOTE_ADDR'];//"REMOTE_ADDR" => The IP address from which the user is viewing the current page.
//we want get the value $ip, and add it in login() as the third parameter
$username = $password = '';
//gain username and password, empty check
if(isset($_POST['submit'])){
    $username = trim($_POST['username']);
    $password = trim($_POST['password']); //The trim() function removes whitespace and other predefined characters from both sides of a string.
    
    
    if(!empty($username) && !empty($password)){//if username and password both not empty
        $result = login($username, $password, $ip);//allow login, login function in login.php
        $message = $result;
    }else{
        //redirect_to('admin_login.php');
        // echo "<br />\n";
         $message = '* Please fill out the request field';
    }
}



//if user already log in, redirect user to welcome.php, dont allow login in user access admin_login.php again
if(isset($_SESSION['user_id'])){
    redirect_to('index.php');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../public/css/main.css">
    <link rel="stylesheet" type="text/css"  href="../public/css/reset.css">
    <title>Login</title>
</head>
<body class="cms">
    <section class="login_area">
            <div class="logo_area">
            <a href="../index.html">BACK</a>
                <img class="logo" src="../public/images/LRG_logo_v2.svg" alt="LRG_logo">
               
            </div>

            <div class="login_form_area">
               
                <h3>Welcome login</h3>
                <div class="login_form">
                 <?php echo !empty($message)?$message:'';?>
                    <form action="admin_login.php" method="post">
                    <label for="username">Username*:</label>
                    <input id="username" type="text" name="username" value="<?= $username;?>" placeholder="">
                    
                    <label for="password">Password*:</label>
                    <input id="password" type="text" name="password" value="<?= $password;?>" placeholder="">
                    
                    <button type="submit" name="submit">LOGIN</button>  
                    </form>
                    
                   
                </div>
            </div>
    </section>
</body>
</html>