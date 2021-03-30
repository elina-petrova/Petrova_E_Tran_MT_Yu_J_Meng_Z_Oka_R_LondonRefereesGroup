<?php
require_once '../load.php';

confirm_logged_in();
admin_access_only();

$name= $subject= ' ';

$user_id =  $_SESSION['user_id'];

$files= getAllFlies();

if(!$files){
    $messager = 'Fail to get user list';
}

if(isset($_GET['id'])){
    $delete_file_id = $_GET['id'];
 
     $delete_file_id = deleteFile($delete_file_id);
 
     if(!$delete_file_id){
         $message = 'Fail to delete file';
     }
 }



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
    <link rel="stylesheet" type="text/css" href="../public/css/main.css">
    <link rel="stylesheet" type="text/css"  href="../public/css/reset.css">
    <title>FILES</title>
</head>
<body class="cms">
<section class="file_dashboard">

    <div class="red_side_nav">
      <a href="index.php">BACK</a>

       <!--if $message isnt empty, print $message info-->
     
     
    </div>
    

    <div class="file_area">

    <h2>FILES</h2>
   
     <div class="event_area">
   
   <h2 class="hidden">event area</h2>
   <?php echo !empty($message)?$message:'';?>

   <form  action="admin_file.php"  method="post"  enctype="multipart/form-data" >
     <?php echo !empty($message)?$message:'';?>

         <label for="name">File Name:</label>
         <input type="text" name="name"  id="name" value="<?= $name;?>">

         <label for="subject">Subject:</label>
         <input type="text" name="subject"  id="subject" value="<?= $subject;?>">

         <label for="file">Choose a file to upload:</label>
         <input type="file" name="file"  id="file" >

         <button type="submit" name="submit">Add</button>

     </form>
   <table>
   <thead>
    <tr>
       <th>ID</th>
       <th>File Name</th>
       <th>Subject</th>
       <th>Creator</th>
       <th>Time</th>
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
           <td>
               <a href="../public/files/<?php echo $single_file['events_file'];?>">CHECK FILE</a> 
               <a href="../public/files/<?php echo $single_file['events_file'];?>" download="">DOWNLOAD FILE</a> 
           </td>
           
            <?php endif;?>

           <?php if($_SESSION['user_level'] ==2):?>
           <td>
               <div class="file_action">
               <a href="../public/files/<?php echo $single_file['events_file'];?>">CHECK FILE</a> 
               <a href="../public/files/<?php echo $single_file['events_file'];?>" download="">DOWNLOAD FILE</a> 
               <a href="admin_file.php?id=<?php echo $single_file['events_id'];?>">DELETE FILE</a>
               </div>
           </td>
            <?php endif;?>
          
         </tr>
       <?php endwhile;?> 

      </table>
    </div>
   </div>
</section>
    
</body>
</html>