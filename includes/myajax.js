$(document).ready(function(){
	//display data
	function showdata(){
		$.ajax({
			url:'display.php',
			success:function(data){
				$("tbody").html(data);
			}
		});
	}
	showdata();



	//delete data
	$("tbody").on("click",".btn-del",function(){
		let id = $(this).attr('del-id');
		$.ajax({
			url:'delete.php',
			type:'POST',
			data:{delid:id},
			success:function(data){
				if (data==1) {
					msg = "<div class='alert alert-success'>Student Deleted Successfully</div>";
					$(".result").html(msg);
					showdata();
				}
			}
		});
	});



	//edit data
	$("tbody").on("click",".btn-edit",function(){
		let id = $(this).attr("edit-id");
		$.ajax({
			url:'edit.php',
			type:'POST',
			dataType:'json',
			data:{editid:id},
			success:function(data){
				$("#id").val(data[0].id);
				$("#name").val(data[0].name);
				$("#email").val(data[0].email);
				$("#password").val(data[0].password);
				$("#btnsave").val("Update");
			}
		});
	});






	//add or update data
	$("#btnsave").click(function(e){
		e.preventDefault();
		let id = $("#id").val();
		let name = $("#name").val();
		let email = $("#email").val();
		let pass = $("#password").val();
		let mydata = {id:id,nm:name,em:email,pw:pass};
		$.ajax({
			url:'insert.php',
			type:'POST',
			data:mydata,
			success:function(data){
				if (data==1) {
					msg = "<div class='alert alert-success'>Student Added Successfully</div>";
					$(".result").html(msg);
					$("#myform")[0].reset();
					showdata();
				}
				else if(data==2){
					msg = "<div class='alert alert-success'>Student Updated Successfully</div>";
					$(".result").html(msg);
					$("#myform")[0].reset();
					$("#btnsave").val("Add");
					showdata();
				}
				else if(data==0){
					msg = "<div class='alert alert-danger'>Something went wrong</div>";
					$(".result").html(msg);
				}
				else{
					$(".result").html("<div class='alert alert-danger'>"+data+"</div>");
				}
			}
		});
	});
});