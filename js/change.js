
function change(num){
	$(".page").hide();
	if(num=='1'){
		$(".eSignIn").fadeIn(300);
	}else if(num=='2'){
		$(".mSignIn").fadeIn(300);
	}else if(num=='3'){
		$(".signUp").fadeIn(300);
	}else {
		$(".myWallet").fadeIn(300);
	}	
}