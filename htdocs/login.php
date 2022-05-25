
<?php
include 'db.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

//$conn = mysqli_connect('localhost','root','','lunamar');
//echo 'Hello World';
$username = $_POST['username'];
$password = $_POST['password'];
//echo $username;
//echo $password;
$hashFormat = "$2a$07$";
$salt = "iusesomecrazystrings22";
$hashF_and_salt = $hashFormat . $salt;
$password = crypt($password,$hashF_and_salt);

$query = "SELECT * FROM user WHERE username = '{$username}' AND password = '{$password}'";
$result = mysqli_query($conn,$query);

/*$json_array = array();
while($row = mysqli_fetch_assoc($result)){
      $json_array[]=$row;
}
echo json_encode($json_array)
*/
$db_username = "";
$db_password = "";

while($row = mysqli_fetch_assoc($result)){

$db_id = $row['id'];
$db_username = $row['username'];
$db_password = $row['password'];
$db_role = $row['role'];

}

if($username !== $db_username && $password!==$db_password) {
//echo "invalid password";
$myObj = new stdClass();
$myObj->loginStatus = 'failed';
$myJSON = json_encode($myObj);
echo $myJSON;
}else {
//echo "login successfull";
//session_start();
//$_SESSION['loginStatus'] = "success";
//$_SESSION['username'] = $db_username;
//$_SESSION['role'] = $db_role;
//echo $_SESSION['loginStatus'];
$myObj = new stdClass();
$myObj->loginStatus = 'success';
$myObj->username = $db_username;
$myObj->role = $db_role;
$myJSON = json_encode($myObj);
echo $myJSON;
}
?>
