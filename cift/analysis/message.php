<?php 
	if (isset($_GET['msg']) && ($_GET['msg'] == '1')){
        echo '<span class="text-success">Mail send successfully</span>';
    }
    if (isset($_GET['msg']) && ($_GET['msg'] == '2')){
        echo '<span class="text-danger">Some error occured, please try later</span>';
    }
?>