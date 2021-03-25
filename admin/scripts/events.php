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


function  addEvent($event){
    try{

        // return 'you are about to create a new movie!'.PHP_EOL.var_export($movie, true);
        # 1. connect to database
       $pdo = Database::getInstance() -> getConnection();

        # 2. validate the file upload
        $file = $event['file'];//get movie cover
        $upload_file = pathinfo($file['name']);//return information about a path using an associative array or a string
        $accepted_types = array('pdf', 'jpg', 'jpe', 'jpeg', 'png', 'docx');//define accepted file types
        
       
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
         
         //echo $target_path;
        //exit;

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
               ':creator'      => 'admin',
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