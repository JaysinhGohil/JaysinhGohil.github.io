var citrusWallet=function(){function e(e){e&&(t=e)
var a=e&&e.walletUrl||"https://wallet.citruspay.com/wallet/showlogin"
if(screen.width>751){var l=document.createElement("iframe")
l.id="walletIframeId",l.name="walletIframeId",l.setAttribute("style","display:block;position:fixed;width:100%;height:100%;height:100vh;left:0;top:0;z-index:10000;overflow:hidden;"),l.setAttribute("allowtransparency","true"),document.getElementsByTagName("body")[0].appendChild(l),document.getElementById("walletIframeId").src=a,document.walletForm.target="walletIframeId",document.walletForm.action=a,document.walletForm.method="POST",document.walletForm.submit()}else document.walletForm.target="_parent",document.walletForm.action=a,document.walletForm.method="POST",document.walletForm.submit()}var t,a=window.addEventListener?"addEventListener":"attachEvent",l=window[a],n="attachEvent"==a?"onmessage":"message"
return l(n,function(e){var a=e.message?"message":"data",l=e[a]
if("closeWallet"==l){var n=document.getElementById("walletIframeId")
n.parentNode.removeChild(n)}else"citrusWalletLaunched"===l&&t&&t.walletLaunchHandler&&t.walletLaunchHandler({message:"Citrus wallet launched"})},!1),{launchWallet:e}}()