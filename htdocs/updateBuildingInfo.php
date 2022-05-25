<?php
include 'db.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

//$conn = mysqli_connect('localhost','root','','lunamar');
//$username = $_POST["username"];
$building_id = $_POST["id"];
$building_no = $_POST["building_no"];
$block_no = $_POST["block_no"];

$query = "UPDATE building SET building_no = '$building_no' AND block_no = '$block_no' WHERE id = '$building_id'";
$result = mysqli_query($conn,$query);

if(mysqli_query($conn,$query)){
  echo "Data has been updated successfully";
  }
else{
  echo "Error!";
}

?>
