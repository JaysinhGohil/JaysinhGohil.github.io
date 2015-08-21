
function change(num){
	$(".page").hide();
	if(num=='1'){
		$(".eSignIn").fadeIn(300);
		$(".eOtpInput").focus();
	}else if(num=='2'){
		$(".mSignIn").fadeIn(300);
		$(".mOtpInput").focus();
	}else if(num=='3'){
		$(".signUp").fadeIn(300);
		$(".signUpMOtpInput").focus();
	}else {
		$(".myWallet").fadeIn(300);
		$(".walletPhoneNumberInput").focus();
	}	
}