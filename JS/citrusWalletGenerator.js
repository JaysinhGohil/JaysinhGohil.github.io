function walletGenerator(U){
	var URL =U;
	if(screen.width > 751 ) {
		var citrusIframe = document.createElement("iframe");
		citrusIframe.id = 'walletIframeId';
		citrusIframe.name = 'walletIframeId';
		citrusIframe.src = URL;
		citrusIframe.setAttribute("style", "display:block;position:fixed;width:100%;height:100%;height:100vh;left:0;top:0;z-index:10000;overflow:hidden;");  		 
		document.getElementsByTagName("body")[0].appendChild(citrusIframe); 
		document.walletForm.action = URL; 
		document.walletForm.method = 'POST';
		document.walletForm.submit();
	}else{
		document.walletForm.action = URL; 
		document.walletForm.method = 'POST';
		document.walletForm.submit();
		document.walletForm.target="_parent"; 
	}		
}

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(e) {
    var key = e.message ? "message" : "data";
    var data = e[key];
	if(data == 'closeWallet'){
		var close = document.getElementById("walletIframeId");
		close.parentNode.removeChild(close);
	}
},false);
