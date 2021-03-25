<?php
require_once '../load.php';
confirm_logged_in();//only login in user can see the index.php page
new_login_user_prevent();


$files= getAllFlies();

if(!$files){
    $messager = 'Fail to get user list';
}

if(isset($_GET['id'])){
    $delete_file_id = $_GET['id'];
 
     $delete_file_id = deleteFile($delete_file_id);
 
     if(!$delete_file_id){
         $message = 'Fail to delete event';
     }
 }

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
    <section class="index_php">
        <div class="login_user">
            <div class="login_info">
                <h2>Hello, <?php echo $_SESSION['user_name'];?>! </h2>
                <h3>You are : <?php echo getCurrentUserLevel();?></h3>
                <h4>Last Login Time: <?php echo $_SESSION['last_login']; ?></h4>
                
                
            </div>

            <div class="login_user_buttons">
                <?php if(!empty($_SESSION['user_level'])):?>
                <a href="admin_createuser.php">CREATE NEW USER</a>
                <?php endif;?>
                 <br>
                <a href="admin_edituser.php">EDIT MY ACCOUNT</a>
                <br>
                <?php if($_SESSION['user_level'] ==2):?>
                <a href="admin_editotheruser.php">EDIT OTHERS ACCOUNT</a>
                <a href="admin_deleteuser.php">DELETE USER</a>
                <a href="admin_addevent.php">ADD EVENT</a>
                <?php endif;?>
                <br>
                <a href="admin_logout.php">SIGN OUT</a>
            </div>

        </div>
        
        <div class="dashboard_area">
            <h2>dashboard area</h2>
            <?php echo !empty($message)?$message:'';?>
            <table>
            <thead>
             <tr>
                <th>ID</th>
                <th>Event Name</th>
                <th>Subject</th>
                <th>Createor</th>
                <th>last_executed</th>
                <th>Actions</th>
             </tr>
            </thead>

            <tbody>
                <?php while($single_file = $files -> fetch(PDO::FETCH_ASSOC)): ?>
                  <tr>
                    <td><?php echo $single_file['events_id'];?></td>
                    <td><?php echo $single_file['events_name'];?></td>
                    <td><?php echo $single_file['events_subject'];?></td>
                    <td><?php echo $single_file['events_creator'];?></td>
                    <td><?php echo $single_file['last_executed'];?></td>
                    <?php if($_SESSION['user_level'] <2):?>
                    <td><a href="../public/files/<?php echo $single_file['events_file'];?>">Download File</a> </td>
                     <?php endif;?>

                    <?php if($_SESSION['user_level'] ==2):?>
                    <td><a href="../public/files/<?php echo $single_file['events_file'];?>">Download File</a> <a href="index.php?id=<?php echo $single_file['events_id'];?>">Delete</a></td>
                     <?php endif;?>
                   
                  </tr>
                <?php endwhile;?>
            </tbody>
        
        </table>
        </div>

    </section>
</body>
</html>