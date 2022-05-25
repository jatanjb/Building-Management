<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$to = "siddesh1311@gmail.com";
$username = $_POST['username'];
$query = $_POST['query'];
echo $username;
echo $query;
$header = "From: ".$username;
$subject = "Query";

mail($to,$subject,$query,$header);

?>
