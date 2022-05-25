<?php
include 'db.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

//$conn = mysqli_connect('localhost','root','','lunamar');
//$username = $_POST["username"];
$pool_id = $_POST["id"];
$poolName = $_POST["poolName"];
$poolStatus = $_POST["poolStatus"];

$query = "UPDATE pool SET poolName = '$poolName' AND poolStatus = '$poolStatus' WHERE id = '$pool_id'";
$result = mysqli_query($conn,$query);

if(mysqli_query($conn,$query)){
  echo "Data has been updated successfully";
  }
else{
  echo "Error!";
}

?>
