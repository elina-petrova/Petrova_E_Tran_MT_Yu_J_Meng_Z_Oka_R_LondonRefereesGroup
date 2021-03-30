<?php
require_once '../load.php';

//make sure this page only access to 
confirm_logged_in();
admin_access_only();

$message = '';
$user_fname = '';
$user_lname = '';
$user_name = '';
$user_email = '';
$user_password = '';

if(isset($_POST['submit'])){

    //user first name

    if(empty($_POST['fname'])) { 
        $results['message'] = 'first name is required'; 
        echo json_encode($results);
        // $fnameError='first name is required'; 
        die(); 
    } else {
        $user_fname = filter_var($_POST['fname'], FILTER_SANITIZE_STRING);
    } 
            
    //user last name
    if(empty($_POST['lname'])) { 
        $results['message'] = 'last name is required'; 
        echo json_encode($results);
        // $fnameError='first name is required'; 
        die(); 
    } else {
        $user_lname = filter_var($_POST['lname'], FILTER_SANITIZE_STRING);
    } 

    //user name
    if(empty($_POST['username'])) { 
        $results['message'] = 'username is required'; 
        echo json_encode($results);
        die(); 
    } else{
        $user_name = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
    }

    //user email
    if (empty($_POST['email'])) {
        $results['message'] ='email is required';
        echo json_encode($results);
        die();
    } else {
        $user_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    }

//Auto-generate the password for the user
   $user_password = genRandomString(); //password function

//prepare email
    $email_recipient = $user_email; //to user email
    $email_subject = sprintf('Hello %s, you can login to your account now.', $user_fname).PHP_EOL ;

    $email_message = sprintf("Your username is: %s, and your email is: %s .", $user_name, $user_email).PHP_EOL;
  
    $email_message .= sprintf("Your current password is: %s .", $user_password).PHP_EOL;

    $email_message .= "Please remember you have 24 hours to active your account. After 24 hours your account will be locked by system. ".PHP_EOL;
 
    $email_message .= "Welcome login our awesome website: www.awesome.com ".PHP_EOL;

    $email_headers = "From: London Referees Group ";
    $email_headers .= "To: $user_email\r\n";
    $email_headers .= "Content-Type: text/html";

// Send the email to user
    $email_result = mail($email_recipient, $email_subject, $email_message,  $email_headers);

//password setting2
    //password is encrypted and stored in the database
    //$hash = password_hash($user_password, PASSWORD_DEFAULT);
    
    $data = array(
        'fname' => trim($_POST['fname']),
        'lname' => trim($_POST['lname']),
        'username' => trim($_POST['username']),
        'password' => $user_password,
        'email' => trim($_POST['email']),
        'user_level' => trim($_POST['user_level']),
    );

    $message = createUser($data);// create user function
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
    <title>Create User Page</title>
</head>
<body class="cms">
    <section class="create_user_area">

      <div class="red_side_nav">
         <a href="index.php">BACK</a>
      </div>
   
      <div class="create_user_form">
        <h2>Create New User</h2>
      
            <?php echo !empty($message)?$message:'';?> 
            
                <form action="admin_createuser.php" method="post">

                    <label for="first_name">First Name :</label>
                    <input type="text" name="fname"  id="first_name" placeholder=" " value="<?= $user_fname;?>">

                    <label for="last_name">Last Name :</label>
                    <input type="text" name="lname"  id="last_name" placeholder=" " value="<?=$user_lname;?>">

                    <label for="user_name">User Name :</label>
                    <input type="text" name="username"  id="user_name" placeholder=" " value="<?= $user_name;?>">

                    <label for="email">Email :</label>
                    <input type="email" name="email"  id="email" placeholder=" " value="<?= $user_email;?>">

                    <label for="user_level">User Level :</label><br>
                    <select  name="user_level"  id="user_level" >
                    <?php  $user_level_map = getUserLevelMap();
                    foreach($user_level_map as $val => $label): ?>
                    <option value="<?php echo $val;?>"><?php echo $label;?></option>   
                    <?php endforeach;?>
                    </select>
                    <p>* New user PASSWORD will auto generated by system and send to user</p>
                    <button  class="subimt-createuser" type="submit" name="submit">CREATE</button>

                </form>
        </div>

    </section>
    
    <script src="./public/js/mail.js" type="module"></script>
</body>
</html>