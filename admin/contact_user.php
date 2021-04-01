<?php
require_once '../load.php';

//make sure this page only access to 
confirm_logged_in();



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
    <title>Find Others</title>
</head>
<body class= "cms">
<section class="contact_user_area">

          <div class="red_side_nav">
            <a href="index.php">BACK</a>
          </div>

          <div class="contact_others">
          <?php echo !empty($message)?$message:'';?>
              
              <?php if(!empty($all_users)):?>
                  <?php while($user_info = $all_users -> fetch(PDO::FETCH_ASSOC)):?><!--user_info: table columns name-->
                  
                     <h2>Contact Others</h2>
                      <form action="contact_user.php" method="post">
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
                              <button type="submit" name="edituser">SUBMIT</button>
                          </div>
                 
                 
                         
                          <?php if (!empty($chosen_user)): ?>
                            <?php while ($user_info = $chosen_user->fetch(PDO::FETCH_ASSOC)): ?>
                            
                               <p> <?php echo $user_info['user_name'];?>'s Email:    <?php echo $user_info['user_email']; ?></p>
                               <p><a href="mailto:<?php echo $user_info['user_email']; ?>">EMAIL <?php echo $user_info['user_name'];?> </a></p>
                            <?php endwhile; ?>
                          <?php endif; ?> 
          
                      </form>
                      
                  <?php endwhile;?>
              <?php endif;?>
      </div>
      </div>
  </section>
</body>
</html>
                              
                       
