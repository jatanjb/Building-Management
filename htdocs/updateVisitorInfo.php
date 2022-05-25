<?php
include 'db.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

//$conn = mysqli_connect('localhost','root','','lunamar');
//$username = $_POST["username"];
$visitors_id = $_POST["id"];
$firstname = $_POST["	firstname"];
$lastname = $_POST["lastname"];
$apt_no = $_POST["apt_no"];
$purpose = $_POST["purpose"];
$mobileno = $_POST["mobileno"];
$car_no = $_POST["car_no"];
$in_date = $_POST["in_date"];
$out_date = $_POST["out_date"];
$username = $_POST["username"];

$query = "UPDATE visitorinfo SET firstname = '$firstname' AND lastname = '$lastname' AND apt_no = '$apt_no' AND purpose = '$purpose' AND mobileno = '$mobileno' AND car_no = '$car_no' AND in_date = '$in_date' AND out_date = '$out_date' AND username = '$username' WHERE id = '$visitors_id'";
$result = mysqli_query($conn,$query);

if(mysqli_query($conn,$query)){
  echo "Data has been updated successfully";
  }
else{
  echo "Error!";
}

?>
