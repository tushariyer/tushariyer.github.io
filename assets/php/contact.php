<?php

if(isset($_POST['message'])){

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
    
	
	$to      = 'tiyer@tushariyer.co';
	$subject = 'Website Contact Form';

	$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	if($status == TRUE){	
		$res['sendstatus'] = 'done';
	
		//Edit your message here
		$res['message'] = 'Email Sent! I\'ll try and get back to you as soon as possible.';
    }
	else{
		$res['message'] = 'Email Failed! Please email me at tiyer@tushariyer.co';
	}
	
	
	echo json_encode($res);
}

?>