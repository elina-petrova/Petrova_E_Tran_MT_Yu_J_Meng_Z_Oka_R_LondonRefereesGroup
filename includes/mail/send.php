<?php
header('Access-Control-Allow-Origin:*');
header('Content-Tyle: application/json; charset=UTF-8');

// ini_set('display_errors', 1);


$result = [];
$visitor_name = '';
$visitor_last_name = '';
$visitor_email = '';
$visitor_message = '';
$visitor_inquery = '';

//error counter: counts all empty inputs
$error_found = 0;

if (isset($_POST['name'])) {
    if (empty($_POST['name'])) {
        $error_found += 1;
    } else {
        $visitor_name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    }
}

if (isset($_POST['email'])) {
    if (empty($_POST['email'])) {
        $error_found += 1;
    } else {
        $visitor_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    }
}
if (isset($_POST['question'])) {
    $visitor_message = filter_var(htmlspecialchars($_POST['question'], FILTER_SANITIZE_STRING));
}

//get the value of selected inquery dropdown option
if (isset($_POST['subject'])) {
    $visitor_inquery = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
}

$result['name'] = $visitor_name;
$result['email'] = $visitor_email;
$result['message'] = $visitor_message;
$result['inquery'] = $visitor_inquery;

if ($error_found === 0) {
    $email_recipient = 'other@gmail.com';
    $email_subject = 'Inquiry from Portfolio Site';
    $email_message = sprintf('Name: %s, Email: %s, Message: %s', $visitor_name, $visitor_email, $visitor_message);
    $email_headers = array(
    //best practise but you need to have a domain email
    'From' => 'noreply@yourdomain.ca',
    'Reply-To' => $visitor_email,
    'Topic' => $visitor_inquery
);

    $email_result = mail($email_recipient, $email_subject, $email_message, $email_headers, $visitor_inquery);

    if ($email_result) {
        $result['message'] = sprintf('Thank you for contacting us, %s!', $visitor_name);
    } else {
        $result['message'] = sprintf('We are sorry your email did not go through');
    }
    $error_found = 0;
}

echo json_encode($result);
