Class: BrowserID {#BrowserID}
==============================

This is a jquery plugin for the BrowserID Protocol. BrowserID is a new way for users to log into web sites using their email address.
It aims to provide a secure way of proving your identity to servers across the internet, without having to create separate usernames and passwords each time. 
Instead of a new username, it uses your email address as you identity which allows it to be descentralized since anyone can send you an
email verification message.

### Syntax:
```
    $('<your button element>').browserid([options]);
```
### Arguments:

- options   `object` - The options for the BrowserID instance.

####Example options :
```
   var options = {
    onlogin : function(response){ ... },
    onfail : function(response){ ... },
    onlogout : function(response){ ... },
    server : 'login.php' /* this is the verifier server url - attached in login.php */
}
```
### Arguments

- `object` The verifier will check that the assertion was meant for your website and is valid
           returns => {status: 'okay','email': 'user@mozilla.com'}, 
           otherwise returns {status: 'failure','reason': 'audience missmatch'}, 

