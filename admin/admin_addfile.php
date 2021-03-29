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
         $message = 'Fail to delete event';
     }
 }

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


     <div class="event_area">
   
   <h2 class="hidden">event area</h2>
   <?php echo !empty($message)?$message:'';?>
   <table>
   <thead>
    <tr>
      
       <th>Event Name</th>
       <th>Subject</th>
       <th>Creator</th>
       <th>Last Executed</th>
       <th>Actions</th>
    </tr>
   </thead>

   <tbody>
       <?php while($single_file = $files -> fetch(PDO::FETCH_ASSOC)): ?>
         <tr>
           
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
               <a href="../public/files/<?php echo $single_file['events_file'];?>">CHECK FILE</a> 
               <a href="../public/files/<?php echo $single_file['events_file'];?>" download="">DOWNLOAD FILE</a> 
               <a href="index.php?id=<?php echo $single_file['events_id'];?>">DELETE FILE</a>
           </td>
            <?php endif;?>
          
         </tr>
       <?php endwhile;?> 

</table>
</div>
     
    
</body>
</html>