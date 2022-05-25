<?php
include 'db.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

//$conn = mysqli_connect('localhost','root','','lunamar');

$query = "SELECT * FROM mediainfo";
$result = mysqli_query($conn,$query);
$json_array = array();
while($row = mysqli_fetch_assoc($result)){
$json_array[] = $row;
}
echo json_encode($json_array);

?>
