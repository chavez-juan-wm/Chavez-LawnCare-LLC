<?php
    // Check for empty fields
    if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) ||
       !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
       {
        echo "No arguments Provided!";
        return false;
       }

    $name = $_POST['name'];
    $email_address = $_POST['email'];
    $message = $_POST['message'];
    $address = $_POST['address'];
    $emailUpdates = $_POST['emailUpdates'];
    $phone = $_POST['phone'];
    $from = 'no-reply@chavezlawncare.com';

    // Create the email
    $headers  = "From: $from\r\n";
    $headers .= "Content-type: text/html\r\n";
    //$headers .= "Cc: email";

    $email_subject = "Website Contact Form:  $name";
    $email_body = "Name: $name<br/>Email: $email_address<br/>Phone: $phone <br/><br/>Address: <br/> $address <br/><br/>$emailUpdates<br/><br/>Message:<br/>$message";

    //Send mail and retrieve value of success or fail
    $result = mail("manny.chavez12@yahoo.com", $email_subject, $email_body, $headers);

    if(!$result) {
        echo 'Message could not be sent.';
        return false;
    }
    else {
        echo 'Message has been sent';
        return true;
    }