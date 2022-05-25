<?php
include 'db.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

//$conn = mysqli_connect('localhost','root','','lunamar');
$username = $_POST["username"];

$query = "SELECT * FROM building";
$result = mysqli_query($conn,$query);
$json_array = array();
while($row = mysqli_fetch_assoc($result)){
$db_building_no = $row['building_no'];
$db_block_no = $row['block_no'];
$db_createdBy = $row['createdBy'];
$db_createdDate = $row['createdDate'];
/*
$myObj = new stdClass();
$myObj->db_building_no = $db_building_no;
$myObj->db_block_no = $db_block_no;
$myObj->db_createdBy = $db_createdBy;
$myObj->db_createdDate = $db_createdDate;
$myJSON = json_encode($myObj);
echo $myJSON;
*/
$json_array[] = $row;
}
echo json_encode($json_array);
?>
