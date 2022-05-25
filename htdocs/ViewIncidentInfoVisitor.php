<?php
include 'db.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

//$conn = mysqli_connect('localhost','root','','lunamar');
$username = $_POST["username"];
$role = $_POST["role"];

if($role == 'Manager' OR $role == 'Admin'){

  $query = "SELECT * FROM incident WHERE reportedFor = 'Visitor'";
  $result = mysqli_query($conn,$query);
  $json_array = array();
      while($row = mysqli_fetch_assoc($result)){
          $db_id = $row['id'];
          $db_incident_desc = $row['incident_desc'];
          $db_incident_date = $row['incident_date'];
          $db_reportedBy = $row['reportedBy'];
          $db_status = $row['status'];
          $db_createdDate = $row['createdDate'];
          $db_createdBy= $row['createdBy'];
          $db_modifiedDate= $row['modifiedDate'];
          /*
          $myObj = new stdClass();
          $myObj->db_incident_desc = $db_incident_desc;
          $myObj->db_incident_date = $db_incident_date;
          $myObj->db_reportedBy = $db_reportedBy;
          $myObj->db_status = $db_status;
          $myObj->db_createdDate = $db_createdDate;
          $myObj->db_createdBy = $db_createdBy;
          $myObj->db_modifiedDate = $db_modifiedDate;
          $myJSON = json_encode($myObj);
          echo $myJSON;
          */
          $json_array[] = $row;
        }
        echo json_encode($json_array);
}
else{
$query = "SELECT * FROM incident WHERE reportedBy = '$username'";
$result = mysqli_query($conn,$query);
$json_array = array();
while($row = mysqli_fetch_assoc($result)){
$db_id = $row['id'];
$db_incident_desc = $row['incident_desc'];
$db_incident_date = $row['incident_date'];
$db_reportedBy = $row['reportedBy'];
$db_status = $row['status'];
$db_createdDate = $row['createdDate'];
$db_createdBy= $row['createdBy'];
$db_modifiedDate= $row['modifiedDate'];
/*
$myObj = new stdClass();
$myObj->db_incident_desc = $db_incident_desc;
$myObj->db_incident_date = $db_incident_date;
$myObj->db_reportedBy = $db_reportedBy;
$myObj->db_status = $db_status;
$myObj->db_createdDate = $db_createdDate;
$myObj->db_createdBy = $db_createdBy;
$myObj->db_modifiedDate = $db_modifiedDate;
$myJSON = json_encode($myObj);
echo $myJSON;
*/
$json_array[] = $row;
}
echo json_encode($json_array);

}
 ?>
