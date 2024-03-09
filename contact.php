<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $course = $_POST['course-select'];
    $message = $_POST['message'];

   $to = "musehubschool@yandex.ru";
 
//  $to = "cifrotrans@gmail.com";
//  $to ="ya.yarochkin@yandex.ru";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nCourse: $course\nMessage: $message";

    $headers = "From: musehubschool@yandex.ru \r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
 header("Location: thank-you.html");
    if (mail($to, $subject, $body, $headers)) {
        // Output JavaScript to redirect the page
        echo '<script>window.location.replace("' . $_SERVER['HTTP_REFERER'] . '?success=true");</script>';
        echo "Debug message - redirection"; // Debugging statement
        exit(); // Stop executing PHP code after redirection
    } else {
        echo "<p>Что-то пошло не так. Попробуйте отправить сообщение позже.</p>";
        echo "<p>Error: " . error_get_last()['message'] . "</p>";
    }
}

// Check if the success query parameter exists and display the message
if (isset($_GET['success']) && $_GET['success'] == 'true') {
    echo "thanks";
    echo "Debug message - success"; // Debugging statement
}
?>
