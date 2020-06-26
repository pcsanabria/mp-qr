$(document).ready(function() {

	$("#test_number").on("change",function(){
		
		$("#externalStoreID").val("suc28167852"+$(this).val());
		$("#externalStoreIDPOS").val("suc28167852"+$(this).val());
		$("#externalPOSID").val("pos28167852"+$(this).val());
		$("#external_id").val("pos28167852"+$(this).val());
		$("#external_reference").val("ref28167852"+$(this).val());

		
	});

});