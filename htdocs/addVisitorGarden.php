<?php
include 'db.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

//$conn = mysqli_connect('localhost','root','','lunamar');

$username = $_POST["username"];
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$phone = $_POST["phone"];
$garden_name = $_POST["garden_name"];
$car_no = $_POST["car_no"];
$purpose = $_POST["purpose"];
$in_date = $_POST["in_date"];
$out_date = $_POST["out_date"];

$query = "INSERT INTO gardenvisitors (firstname,lastname,garden_name,purpose,mobileno,car_no,in_date,out_date,username) VALUES('$fname','$lname','$garden_name','$purpose','$phone','$car_no','$in_date','$out_date','$username')";

if(mysqli_query($conn,$query)){
  echo "Data has been inserted successfully";
  }
else{
  echo "Error!";
}

?>
