<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_count";
$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error) {
	die("Connection Failed: " . $conn->connect_error);
}

$sql = "UPDATE tb_count SET count_visit = count_visit+1 where count_id = 1";
$conn->query($sql);

$sql = "SELECT count_visit FROM tb_count WHERE count_id = 1";
$result = $conn->query($sql);

//echo '<pre>';
//var_dump($result);
//var_dump($conn);
//var_dump($sql);
//die();

if($result->num_rows > 0){
	while($row = $result->fetch_assoc()) {
		$visits = $row["count_visit"];
		echo "Visitors Count : $visits</div>"; 
}}
	
$conn -> close();	

?>