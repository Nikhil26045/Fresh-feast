<?php
session_start();

// Define the site URL dynamically
$siteurl = "http://" . $_SERVER['HTTP_HOST'] . '/project';

// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$database = "chatka_matka"; // Your database name

// Create connection to MySQL
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
