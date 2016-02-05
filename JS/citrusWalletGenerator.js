var citrusWallet = (function(){
	var configObj;
	function launchWallet(confObj){
			confObj && (configObj = confObj);
			var URL = confObj && confObj.walletUrl|| "https://wallet.citruspay.com/wallet/showlogin";
			if(screen.width > 751 ) {
				var citrusIframe = document.createElement("iframe");
				citrusIframe.id = 'walletIframeId';
				citrusIframe.name = 'walletIframeId';
				citrusIframe.setAttribute("style", "display:block;position:fixed;width:100%;height:100%;height:100vh;left:0;top:0;z-index:10000;overflow:hidden;"); 
				citrusIframe.setAttribute('allowtransparency', 'true');		
				document.getElementsByTagName("body")[0].appendChild(citrusIframe);  
				document.getElementById('walletIframeId').src = URL;		
				document.walletForm.target = "walletIframeId";
				document.walletForm.action = URL; 
				document.walletForm.method = 'POST';
				document.walletForm.submit();
			}else{		
				document.walletForm.target="_parent";
				document.walletForm.action = URL; 
				document.walletForm.method = 'POST';
				document.walletForm.submit(); 
			}		
		};

		var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
		var eventer = window[eventMethod];
		var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

		// Listen to message from child window
		eventer(messageEvent,function(e) {
			var key = e.message ? "message" : "data";
			var data = e[key];
			if(data == 'closeCitrusWallet'){
				var close = document.getElementById("walletIframeId");
				close.parentNode.removeChild(close);
			}else if(data === 'citrusWalletLaunched'){
				configObj && configObj.walletLaunchHandler && configObj.walletLaunchHandler({message: 'Citrus wallet launched'});
			}
		},false);
		
		return {
			launchWallet: launchWallet
		};

})();



