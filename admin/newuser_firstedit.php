<?php
require_once '../load.php';
confirm_logged_in();//only login in user can see the index.php page


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../public/css/main.css">
    <link rel="stylesheet" type="text/css"  href="../public/css/reset.css">
    <title>Create user successful page.</title>
</head>
<body class= "cms">
    <section class="create_success_area">
        <h2>Hi, <?php echo $_SESSION['user_name'];?>! You have successfully edit your account, please log out first to make change work. </h2>
        <br>
        
        <a href="admin_logout.php">LOG OUT</a>
    </section>
</body>
</html>
                            