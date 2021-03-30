<?php
require_once '../load.php';
confirm_logged_in();//only login in user can see the index.php page
new_login_user_prevent();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../public/css/main.css">
    <link rel="stylesheet" type="text/css"  href="../public/css/reset.css">
    
    <title>Welcome Page</title>
</head>
<body class="cms">
    <section class="index_area">
        <div class="index_buttons">

            <?php if(!empty($_SESSION['user_level'])):?>
            <a href="admin_createuser.php">CREATE NEW USER</a>
            <?php endif;?>   

            <a href="admin_edituser.php">EDIT MY ACCOUNT</a>
               
            <?php if($_SESSION['user_level'] ==2):?>
            <a href="admin_editotheruser.php">EDIT OTHERS</a>
            <a href="admin_deleteuser.php">DELETE USER</a>
            
            <?php endif;?> 
            <a href="admin_file.php">FILES</a>
            <a href="admin_logout.php">SIGN OUT</a>
        </div>
        
        <div class="dashboard">
            <div class="login_user">      
                    <h2>Hello, <?php echo $_SESSION['user_name'];?>! </h2>
                  
            </div>

            <div class="responsiveCal">
                <h2>Calendar</h2>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;src=Yzc1NTY0am9tNHY1M290ZXZkbTVwbHRyYjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D50000" style="border:solid 1px #777" width="800" height="500" frameborder="0" scrolling="no"></iframe>        
            </div>
        </div>
           

    </section>
</body>


</html>