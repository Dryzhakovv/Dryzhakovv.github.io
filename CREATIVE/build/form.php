<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['txt_input'])) {$formData = $_POST['text_input'];}
    if (isset($_POST['email_input'])) {$email = $_POST['email_input'];}
    if (isset($_POST['text_input'])) {$name = $_POST['text_input'];}
    if (isset($_POST['phone_input'])) {$phone = $_POST['phone_input'];}
    if (isset($_POST['message_input'])) {$message = $_POST['message_input'];}
    $to = "niggall@email.ru"; /*Укажите ваш адрес электронной почты*/
    $headers = "Content-type: text/plain; charset = utf-8";
    $subject = "$formData";
    $message = "$formData\n\nОткуда: $email \n\nОтправитель: $name \n\nТелефон: $phone \n\nСообщение: $message";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo "<center>Спасибо за отправку вашего сообщения! Наши специалисты свяжутся с вами в течение часа.</center>";
    }
    else 
    {
    echo "<center><b>Ошибка. Сообщение не отправлено! Проверьте правильность введенных данных</b></center>";
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>