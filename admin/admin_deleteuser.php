<?php
require_once '../load.php';
//make sure this page only access to 
confirm_logged_in(true);
admin_access_only();

$users = getAllUsers();


if(!$users){
    $message = 'Fail to get user list';
}


if(isset($_GET['id'])){
   $delete_user_id = $_GET['id'];

    $delete_user_id = deleteUser($delete_user_id);

    if(!$delete_user_id){
        $message = 'Fail to delete user';
    }
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete User</title>
</head>

<body class="cms">
    <h2>Delete User</h2>
    <?php echo !empty($message)?$message:'';?>
    
        <table>
            <thead>
             <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>User Lastname</th>
                <th>User Email</th>
                <th>Delete</th>
             </tr>
            </thead>

            <tbody>
            <?php while($single_user = $users  -> fetch(PDO::FETCH_ASSOC)):?>
                  <tr>
                    <td><?php echo $single_user['user_id'];?></td>
                    <td><?php echo $single_user['user_name'];?></td>
                    <td><?php echo $single_user['user_lname'];?></td>
                    <td><?php echo $single_user['user_email'];?></td>
                    <td><a href="admin_deleteuser.php?id=<?php echo $single_user['user_id'];?>">Delete</a></td>
                  </tr>
                <?php endwhile;?>
            </tbody>
        
        </table>
       
                <a href="index.php">Back</a>
</body>
</html>