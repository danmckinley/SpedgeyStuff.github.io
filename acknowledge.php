<style>
    body {
        background: #945D5E;
        text-align: center;
        color: #282828;
        position: relative;
    }
    
    p {
        font-family: Arial;
        margin-top: 20%;
        font-size: 20px;
    }
    
    a {
        text-decoration: none;
        font-weight: bold;
    }
    
    img {
        width: 100px;
    }
</style>

<body>
<?php if (isset($success) && $success) { ?>
    <h1>Thank you</h1>
    <p>Your message has been sent. Click <a href="http://webbkurs.ei.hv.se/~sial0007/Project/index.html">here</a> to return to the website.</p>
    
    <?php } else { ?>
    <p>There was a problem sending your message.<br>Please <a href="http://webbkurs.ei.hv.se/~sial0007/Project/index.html#contact">try again</a>, or contact me directly through social media.</p>
    <a href="#"><img src="img/twitter.png"></a>
    <a href="#"><img src="img/instagram.png"></a>
    <a href="#"><img src="img/linkedin.png"></a>

    
    <?php } ?>
</body>

<?php
    if (isset($_POST['send'])) {
        $to = 'sial0007@student.hv.se';
        $subject = $_POST['subject'];
        $message = 'Name: ' . $_POST['fname'] . ' ' . $_POST['lname'] . "\r\n";
        $message .= 'Email: ' . $_POST['email'] . "\r\n\r\n";
        $message .= 'Message: ' . $_POST['message'];
        
//        $headers = "From: webmaster@webbkurs.ei.hv.se\r\n";
        $headers = 'Content-Type: text/plain; charset=utf-8';
//        $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
//        if ($email) {
//            $headers .= "\r\nReply-To: $email";
//        }
        
        $success = mail($to, $subject, $message, $headers, '-fsial0007@student.hv.se');
    }
?>