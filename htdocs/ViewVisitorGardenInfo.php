<?php
include 'db.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

//$conn = mysqli_connect('localhost','root','','lunamar');
$username = $_POST["username"];
$role = $_POST["role"];
$query1 = "SELECT * FROM gardenvisitors";
$result1 = mysqli_query($conn,$query1);
$json_array = array();
      while($row1 = mysqli_fetch_assoc($result1)){
            $db_firstname = $row1['firstname'];
            $db_lastname = $row1['lastname'];
            $db_garden_name	 = $row1['garden_name'];
            $db_purpose = $row1['purpose'];
            $db_mobileno= $row1['mobileno'];
            $db_car_no= $row1['car_no'];
            $db_username = $row1['username'];
            $db_in_date = $row1['in_date'];
            $db_out_date = $row1['out_date'];
            /*
            $myObj = new stdClass();
            $myObj->db_firstname = $db_firstname;
            $myObj->db_lastname = $db_lastname;
            $myObj->db_garden_name = $db_garden_name;
            $myObj->db_purpose = $db_purpose;
            $myObj->db_mobileno = $db_mobileno;
            $myObj->db_car_no = $db_car_no;
            $myObj->db_username = $db_username;
            $myObj->db_in_date = $db_in_date;
            $myObj->db_out_date = $db_out_date;
            $myJSON = json_encode($myObj);
            echo $myJSON;
            */
            $json_array[] = $row1;
      }
echo json_encode($json_array);
?>
