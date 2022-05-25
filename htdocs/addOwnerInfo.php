<?php
include 'db.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

//$conn = mysqli_connect('localhost','root','','lunamar');

$username = $_POST["username"];
$owner_username = $_POST["owner_username"];
$floor_no = $_POST["floor_no"];
$block_no = $_POST["block_no"];
$apt_no = $_POST["apt_no"];

$date = date('Y-m-d H:i:s');
$query = "INSERT INTO ownerinfo (owner_username,floor_no,block_no,apt_no,createdBy,createdDate) VALUES('$owner_username','$floor_no','$block_no','$apt_no','$username','$date')";

if(mysqli_query($conn,$query)){
  echo "Data has been inserted successfully";
  }
else{
  echo "Error!";
}

?>
