<?php

function getAllFlies(){
    $pdo = Database::getInstance() -> getConnection();

    $get_all_files_query = 'SELECT * FROM tbl_events ';//SQL placeholder to aviod SQL injection
    $files = $pdo ->query($get_all_files_query);

    if($files){
         return $files;
    }else{
        return false;
    }
    
}


function deleteFile($file_id){
    $pdo = Database::getInstance() -> getConnection();

    $delete_file_query = 'DELETE FROM tbl_events WHERE events_id = :id ';//SQL placeholder to aviod SQL injection
    $delete_file_set = $pdo ->prepare($delete_file_query);
    $delete_file_result = $delete_file_set -> execute(
        array(
            ':id' => $file_id
        )
        );
    if($delete_file_result && $delete_file_set -> rowCount()>0){
        redirect_to('index.php');
    }else{
        return false;
    }
}


// function getUsername($user_id){
//     // echo 'you are try to fetch user :'.$user_id;
//     $pdo = Database::getInstance() -> getConnection();

//     $get_username_query = 'SELECT user_name FROM tbl_users WHERE user_id = :id';//SQL placeholder to aviod SQL injection
//     $username = $pdo ->prepare($get_username_query);
//     $get_username_result = $username -> execute(
//         array(
//             ':id' => $user_id
//         )
//         );

//     if($username){
//          return $username;
//     }else{
//         return false;
//     }
  
// }


function addEvent($event){
    try{

        // return 'you are about to create a new movie!'.PHP_EOL.var_export($movie, true);
        # 1. connect to database
       $pdo = Database::getInstance() -> getConnection();
    
        
         
       
       
        # 2. validate the file upload
        $file = $event['file'];
        $upload_file = pathinfo($file['name']);//return information about a path using an associative array or a string
        $accepted_types = array('pdf', 'dox','docx');//define accepted file types
        
       
        //if uploaded file type deesnt belong to accetped types, throw a error message and stop heres
        if(!in_array($upload_file['extension'], $accepted_types)){
               throw new Exception(" Wrong file type !"); 
               //in try block, if throw a new exception,  code gonna stop here and jump to catch section
        }

        

        # 3. move the uploaded file around (move the file from tmp path to the /images
        $file_path = '../public/files/';//destination: where we add the cover file
        $generated_name  = $upload_file['filename'] ;
        $generated_filename  = $generated_name . '.' . $upload_file['extension'];
        $target_path  = $file_path . $generated_filename ;
        //  echo $generated_filename ;
        //  exit;
        if(isFilenameExists( $generated_filename )){
            return 'Filename already exist!';
            exit;
        }
        

        # if move cover to image folder fail
        if (!move_uploaded_file($file['tmp_name'], $target_path)) {
           throw new Exception('Failed to move uploaded file, check permission!');
       }
        


       $currentDateTime = date('Y-m-d H:i:s');
        # 4. inset into database(tbl_movies) 
        $insert_event_query    = 'INSERT INTO tbl_events(events_name, events_subject, events_creator, last_executed, events_file)';
        $insert_event_query   .= ' VALUES(:name, :subject, :creator, :last_executed, :file)';
        $insert_event          = $pdo -> prepare($insert_event_query);
        $insert_event_result   = $insert_event -> execute(
            array(
               ':name'     =>$event['name'],
               ':subject'     =>$event['subject'],
               ':creator'      => $event['user'],
               ':last_executed'   => $currentDateTime,
               ':file' => $generated_filename
                 )
            );
            

            # 5. if all of above, redirect user to index.php
            redirect_to('index.php');

   }catch(Exception $e){//section throw will be the section catch
       # Return the erro message -> Wrong file type !
       $error = $e ->getMessage();
       return $error;

   }
}

function isFilenameExists($events_file){//true=exist, stop
    $pdo = Database::getInstance() -> getConnection();

    $file_exists_query = 'SELECT COUNT(*) FROM tbl_events WHERE events_file = :events_file';
    $file_exists_set = $pdo ->prepare($file_exists_query);
    $file_exists_result = $file_exists_set -> execute(
        array(
          ':events_file'=>$events_file
        )
    );

    return !$file_exists_result || $file_exists_set->fetchColumn()>0;
                                  // if this username more than 0, mean this user already exist
} 