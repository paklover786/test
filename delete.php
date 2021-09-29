<?php 
include('db.php');
$id = $_POST['delid'];
$query = mysqli_query($con,"DELETE FROM students WHERE id='$id'");
if ($query) {
	echo 1;
}



 ?>