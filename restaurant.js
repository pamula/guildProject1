

$('#submitButton').click(function(){
    
     alert("your form got submitted");
   });
 //document.getElementById('submitButton').addEventListener('click',validateItems);

function validateItems(form){
	var contents = form.fname.value + "<br>" + form.lname.value + "<br" + form.pname.value ;

	var errors = [];
	 var re = /^[\w ]+$/;
	if(form.fname.value == ""){
		errors.push("error name is empty");
		// form.fname.focus();
		// return false;
	} else if(!re.test(form.fname.value)) {
      errors.push("error name characters not valid");
    }


  
    if(form.lname.value == ""){
		errors.push("error email is empty");
	}

	if(form.pname.value == "" || isNAN(form.pname.value)){
		errors.push("error phone number is empty");
	}

	if(errors.length>0){
		var msg = "ERRORS:\n\n";
		for(var i=0;i<errors.length;i++){
			msg+=errors[i] + "\n";
		}
		alert(msg);
		return false;
	}
	

	return true;
}

