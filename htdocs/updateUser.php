<?php
include 'db.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

//$conn = mysqli_connect('localhost','root','','lunamar');
//$username = $_POST["username"];
$user_id = $_POST["id"];
$username = $_POST["username"];
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$gender = $_POST["gender"];
$role = $_POST["role"];
$mobileno = $_POST["mobileno"];
$address = $_POST["address"];
$city = $_POST["city"];
$state = $_POST["state"];
$country = $_POST["country"];
$zipcode = $_POST["zipcode"];

$query = "UPDATE user SET username = '$username' AND block_no = '$block_no' AND firstname = '$firstname' AND lastname = '$lastname' AND gender = '$gender' AND role = '$role' AND mobileno = '$mobileno' AND address = '$address' AND city = '$city' WHERE id = '$user_id'";
$result = mysqli_query($conn,$query);

if(mysqli_query($conn,$query)){
  echo "Data has been updated successfully";
  }
else{
  echo "Error!";
}

?>
