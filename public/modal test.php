<?php
if($_POST["message"]) {
    mail("your@email.address", "Form to email message", $_POST["message"], "From: an@email.address");
}
f($_POST["submit"]) {
    $recipient="storeabytedatastorage@gmail.com";
    $subject="Form to email message";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>