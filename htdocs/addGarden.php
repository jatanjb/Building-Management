<?php
include 'db.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

//$conn = mysqli_connect('localhost','root','','lunamar');

$username = $_POST["username"];
$gardenName = $_POST["gardenName"];
$gardenStatus = $_POST["gardenStatus"];

$date = date('Y-m-d H:i:s');
$query = "INSERT INTO garden (gardenName,gardenStatus,createdBy,createdDate) VALUES('$gardenName','$gardenStatus','$username','$date')";

if(mysqli_query($conn,$query)){
  echo "Data has been inserted successfully";
  }
else{
  echo "Error!";
}

?>
