BrowserID
=========

This is a jQuery client library for the BrowserID Protocol. BrowserID is a new way for users to log into web sites using their email address.
It aims to provide a secure way of proving your identity to servers across the internet, without having to create separate usernames and passwords each time. 
Instead of a new username, it uses your email address as you identity which allows it to be descentralized since anyone can send you an
email verification message.

![Screenshot](https://developer.mozilla.org/@api/deki/files/6051/=browserid-enter-email.png)

#[DEMO](http://htmlpreview.github.com/?https://github.com/altryne/browserID-jQuery/blob/master/Demos/index.html)
How to Use
----------

###Include the BrowserID include.js library in your site by adding the following script tags to your pages:
```
<script>navigator.id || document.write('<script src="https://login.persona.org/include.js"><\/script>')</script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="jquery.browserid.js"></script>
```

###Adding a login button:

```
<button id="login">LOGIN</button>
```

###on DOM ready initiate
```
$('<your button element>').browserID([options]);
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

References:

- https://browserid.org/
- https://developer.mozilla.org/en/BrowserID
- https://browserid.org/developers
- http://identity.mozilla.com/post/7616727542/introducing-browserid-a-better-way-to-sign-in
- http://identity.mozilla.com/post/17207734786/id-provider-support-now-live-on-browserid
- https://github.com/mozilla/browserid/wiki
- https://github.com/thinkphp/browserID-MooTools
