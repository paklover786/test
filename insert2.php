<?php 
include('db.php');
$id = $_POST['id'];
$name = $_POST['nm'];
$email = $_POST['em'];
$pass = $_POST['pw'];

if (!empty($name) AND !empty($email) AND !empty($pass)) {
	if ($id<1) {
		$insert_query = mysqli_query($con,"INSERT INTO students(name,email,password) VALUES('$name','$email','$pass')");
	}
	else if ($id>=1) {
		$update_query = mysqli_query($con,"UPDATE students SET name='$name',email='$email',password='$pass' WHERE id='$id'");
	}

	if (isset($insert_query) AND $insert_query==true) {
		echo 1;
	}
	else if(isset($update_query) AND $update_query==true){
		echo 2;
	}
	else{
		echo 0;
	}
}
else{
	echo "All Fields are required";
}




?>