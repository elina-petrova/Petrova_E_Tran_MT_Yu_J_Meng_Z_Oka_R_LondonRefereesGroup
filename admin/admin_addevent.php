<?php
require_once '../load.php';

confirm_logged_in();
admin_access_only();

$name= $subject=$file= ' ';


$user_id =  $_SESSION['user_id'];

// $username = getUsername($user_id);
// if(!$username){
//     $messager = 'Fail to get user list';
// }

if(isset($_POST['submit'])){

    $name = trim($_POST['name']);
    $subject = trim($_POST['subject']);
    $file = $_FILES['file'];

    if(!empty($name) && !empty($subject) ){

        if(empty($file)){
            $message = "File is required";
        }else{
            $data = array(
                'file' => $_FILES['file'],
                'name' => trim($_POST['name']),
                'subject' => trim($_POST['subject']),
                'user' => $user_id
            );
        
            $message = addEvent($data);

        }
            
    }else{
         $message = '* Plesase fill out the request field';
    }
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Event</title>
</head>
<body class="cms">
    <h2>Add Event</h2>
    <?php echo !empty($message)?$message:'';?> <!--if $message isnt empty, print $message info-->
     
     <form  action="admin_addevent.php"  method="post"  enctype="multipart/form-data" >

        <label for="name">Event Name:</label><br>
        <input type="text" name="name"  id="name" value="<?= $name;?>"><br><br>

        <label for="subject">Event Subject:</label><br>
        <input type="text" name="subject"  id="subject" value="<?= $subject;?>"><br><br>


        <label for="file">Choose a file to upload:</label><br>
        <input type="file" name="file"  id="file" ><br><br>



        <button type="submit" name="submit">Add</button>
        <a href="index.php">Back</a>

     </form>
    
</body>
</html>