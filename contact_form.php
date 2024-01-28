<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["Email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Prepare email content
    $to = "arnavrangwani@gmail.com";
    $subject = "New Contact Form Submission: " . $subject;
    $messageBody = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

    // Send email
    mail($to, $subject, $messageBody);

    // You can optionally send a response back to the client
    echo json_encode(["success" => true]);
} else {
    // Handle invalid requests
    http_response_code(400);
    echo json_encode(["error" => "Invalid request"]);
}
?>
