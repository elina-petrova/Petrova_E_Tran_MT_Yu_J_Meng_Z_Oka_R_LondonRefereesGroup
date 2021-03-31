<?php
//Auto-generate the password for the user
function genRandomString() {
    $length = 8;
    $characters = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $password = "";    

    for ($p = 0; $p < $length; $p++) {
        $password .= $characters[rand(0, strlen($characters))];
    }

    return  $password;
}
?>