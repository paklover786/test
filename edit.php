<?php 
include('db.php');
$id = $_POST['editid'];
$data = array();
$query = mysqli_query($con,"SELECT * FROM students WHERE id='$id'");
while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}
echo json_encode($data);

 ?>