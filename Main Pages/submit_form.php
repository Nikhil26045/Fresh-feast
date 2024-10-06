<?php
include "connect1.php"; // Database connection

// Start session to handle error/success messages
session_start();

// Retrieve form data from POST request
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$state = $_POST['state'];
$address = $_POST['address'];

// Check if required fields are empty
if (empty($name) || empty($email) || empty($phone)) {
    $_SESSION['error'] = "Please fill the required fields.";
    header("Location: " . $siteurl . "/index1.php");
    exit();
} else {
    // Prepare SQL query to insert the form data into the signin table
    $sql = "INSERT INTO signin (name, email, phone, state, address) VALUES ('$name', '$email', '$phone', '$state', '$address')";
    
    // Execute the query and check if it's successful
    if (mysqli_query($conn, $sql)) {
        $_SESSION['success'] = "Sign In to Fresh Feast successfully!";
        header("Location: " . $siteurl . "/index1.php");
        exit();
    } else {
        // Show error if query fails
        echo "Error: " . mysqli_error($conn);
    }
}
?>
