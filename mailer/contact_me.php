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

    // Create the email and send the message
    $email_subject = "Website Contact Form:  $name";
    $email_body = "Name: $name<br>Email: $email_address<br>Phone: $phone <br><br>Address: <br> $address <br><br>$emailUpdates<br><br>Message:<br>$message";

    require_once('class.phpmailer.php');
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPDebug  = 0;
    $mail->SMTPAuth   = true;
    $mail->SMTPSecure = "ssl";
    $mail->Host       = "smtp.gmail.com";
    $mail->Port       = 465;
    $mail->AddAddress('manny.chavez12@yahoo.com');
//    $mail->AddAddress('omar@chavezlawncare.com');
//    $mail->AddAddress('grace@chavezlawncare.com');
    $mail->Username="chavezlawncare22@gmail.com";
    $mail->Password="8Bc9ZZ15";
    $mail->SetFrom('no-reply@chavezlawncare.com', 'Chavez LawnCare');
    $mail->Subject    = $email_subject;
    $mail->MsgHTML($email_body);

    if(!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
        return false;
    }
    else {
        echo 'Message has been sent';
        return true;
    }