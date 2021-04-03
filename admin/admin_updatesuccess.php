<?php
require_once '../load.php';
confirm_logged_in();//only login in user can see the index.php page


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css"  href="../public/css/reset.css">
    <link rel="stylesheet" type="text/css" href="../public/css/main.css">
    <link rel="stylesheet" href="https://use.typekit.net/yax5rrr.css">
    <title>Edit Users</title>
</head>
<body class= "cms">
    <section class="create_success_area">
        <h2>Hi, <?php echo $_SESSION['user_name'];?>! You have successfully modify the user information. </h2>
        <a href="admin_editotheruser.php">EDIT ANOTHER USER</a><br>
        <a href="index.php">BACK</a><br>
        <a href="admin_logout.php">SIGN OUT</a>
    </section>
</body>
</html>