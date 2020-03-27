<?php


$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];
$userQuestion = $_POST['userQuestion'];

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
// Load Composer's autoloader
require 'phpMailer/Exception.php';
require 'phpMailer/PHPMailer.php';
require 'phpMailer/SMTP.php';
// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'anna1anamalia@gmail.com';                     // SMTP username
    $mail->Password   = 'anamalia337799';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('anna1anamalia@gmail.com', 'Анна Жук');
    $mail->addAddress('anamalia@tut.by');     // Add a recipient
    
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя ${userName}. Его телефон: ${userPhone}. Его вопрос: ${userQuestion}.";
    
    $mail->send();
    header('Location: thanks.html');
} catch (Exception $e) {
    echo "Сообщение не отправлено. Код ошибки: {$mail->ErrorInfo}";
}