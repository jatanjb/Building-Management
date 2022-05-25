<?php
include 'db.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

//$conn = mysqli_connect('localhost','root','','lunamar');
//$username = $_POST["username"];
$services_id = $_POST["id"];
$apt_no = $_POST["apt_no"];
$block_no = $_POST["block_no"];
$request_date = $_POST["request_date"];
$service_type = $_POST["service_type"];
$cost = $_POST["cost"];
$status = $_POST["status"];
$username = $_POST["username"];

$query = "UPDATE services SET apt_no = '$apt_no' AND block_no = '$block_no' AND request_date = '$request_date' AND service_type = '$service_type' AND cost = '$cost' AND status = '$status' AND username = '$username' WHERE id = '$services_id'";
$result = mysqli_query($conn,$query);

if(mysqli_query($conn,$query)){
  echo "Data has been updated successfully";
  }
else{
  echo "Error!";
}

?>
