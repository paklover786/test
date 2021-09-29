<?php 
include('db.php');
$query = mysqli_query($con,"SELECT * FROM students");
while ($row = mysqli_fetch_assoc($query)) {
	echo "<tr>";
	echo "<td>{$row['id']}</td>";
	echo "<td>{$row['name']}</td>";
	echo "<td>{$row['email']}</td>";
	echo "<td>{$row['password']}</td>";
	echo "<td>";
?>
<button class="btn btn-warning btn-sm btn-edit" edit-id="<?php echo $row['id']?>">Edit</button>
<button class="btn btn-danger btn-sm btn-del" del-id="<?php echo $row['id']?>">Delete</button>
<?php 
	echo "</td>";
	echo "</tr>";
}



 ?>