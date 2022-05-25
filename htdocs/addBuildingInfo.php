<?php
include 'db.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

//$conn = mysqli_connect('localhost','root','','lunamar');

$username = $_POST["username"];
$building_no = $_POST["building_no"];
$block_no = $_POST["block_no"];

$date = date('Y-m-d H:i:s');
$query = "INSERT INTO building (building_no,block_no,createdBy,createdDate) VALUES('$building_no','$block_no','$username','$date')";

if(mysqli_query($conn,$query)){
  echo "Data has been inserted successfully";
  }
else{
  echo "Error!";
}

?>
