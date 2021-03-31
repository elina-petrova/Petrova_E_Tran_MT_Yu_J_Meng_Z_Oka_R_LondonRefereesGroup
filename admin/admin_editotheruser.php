<?php
require_once '../load.php';

//make sure this page only access to 
confirm_logged_in();
//only admin have acesss to this page
admin_access_only();


$id = $_SESSION['user_id'];//define in login.php

$all_users = getOtherUsers($id);

if(empty($all_users)){
    $messager = 'Fail to get user list';
}

// when user click submit
if(isset($_POST['submit'])){
    
    $data = array(
        'fname'      => trim($_POST['fname']),
        'lname'      => trim($_POST['lname']),
        'username'   => trim($_POST['username']),
        'password'   => trim($_POST['password']),
        'email'      => trim($_POST['email']),
        'user_level' => isCurrentUserAdminAbove()?trim($_POST['user_level']):'0', 
        'id'         => trim($_POST['user_id']),//update a exist user so need id
    );
    // var_dump($data);die;
  $message = editUser($data);//update user info to database
}

if (isset($_POST['edituser'])) {
    $fetch_id = trim($_POST['user_id']);
    $chosen_user = getSingleUser($fetch_id);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../public/css/main.css">
    <link rel="stylesheet" type="text/css"  href="../public/css/reset.css">
    <title>Edit User</title>
</head>
<body class= "cms">
    <section class="edit_user_area">

          <div class="red_side_nav">
            <a href="index.php">BACK</a>
          </div>
       
        <div class="edit_user_form">
        <h2>Edit Other Users</h2>
           

            <?php echo !empty($message)?$message:'';?>
              
                <?php if(!empty($all_users)):?>
                    <?php while($user_info = $all_users -> fetch(PDO::FETCH_ASSOC)):?><!--user_info: table columns name-->
                    
                       
                        <form action="admin_editotheruser.php" method="post">
                            <!-- <label for="user_id">Username</label> -->
                            <div class="select_user">
                                <select name="user_id" id="user_id">
                                <option selected="">SELECT A USER HERE</option>
                                <!-- Loop all users in a Dropdown Menu -->
                                    <?php foreach ($all_users as $user): ?>
                                        <option id="<?php echo $user['user_id'] ?>" value="<?php echo $user['user_id'] ?>"><?php echo $user['user_name'] ?></option>
                                    <?php endforeach; ?>
                                </select>
                                <!-- "Post" to choose which ID will be edited -->
                                <button type="submit" name="edituser">EDIT THIS USER</button>
                            </div>
                   
  
                            <?php if (!empty($chosen_user)): ?>
                              
                              <?php while ($user_info = $chosen_user->fetch(PDO::FETCH_ASSOC)): ?>
                              
                              <div class="notthisuser">
                                <a href="admin_editotheruser" >not this user?</a>
                              </div>
                              
                                <input type="hidden" name="user_id" value="<?php echo $user_info['user_id']; ?>">
                                
                                <label for="user_name">User Name:</label>
                                <input type="text" name="username"  id="user_name"  value="<?php echo $user_info['user_name']; ?>">
                   
                                <label for="first_name">First Name:</label>
                                <input type="text" name="fname"  id="first_name"  value="<?php echo $user_info['user_fname']; ?>"> 
                        
                                <label for="last_name">Last Name:</label>
                                <input type="text" name="lname"  id="last_name"  value="<?php echo $user_info['user_lname']; ?>">
                                
                                <label for="password">Password:</label>
                                <input type="text" name="password"  id="password"  value="<?php echo $user_info['user_password']; ?>">
                               
                                <label for="email">User Email:</label>
                                <input type="email" name="email"  id="email"  value="<?php echo $user_info['user_email']; ?>">
                                
                                
                                    <?php if(isCurrentUserAdminAbove()):?>
                                        <label for="user_level">User Level:</label>
                                        <select  name="user_level"  id="user_level" >
                                            <?php  $user_level_map = getUserLevelMap();
                                            foreach($user_level_map as $val => $label): ?>
                                            <option value="<?php echo $val;?>"<?php echo $val ===(int)$user_info['user_level']?'selected':'';?>><?php echo $label;?></option>   
                                            <?php endforeach;?>
                                        </select>
                                        <button  class="updateotheruser" type="submit" name="submit">SUBMIT</button>
                                    <?php endif;?>
                              <?php endwhile; ?>
                            <?php endif; ?> 
            
                        </form>
                        
                    <?php endwhile;?>
                <?php endif;?>
        </div>
    </section>
</body>
</html>