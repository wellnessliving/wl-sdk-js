You must add into JS SDK file with the class `WlSdk_Config_Mixin` for configuring.
It must be successor of `WlSdk_Config_MixinAbstract` class.  
See file `SdkConfigMixin.js` for example.  
Redefine in this class fields:
- `URL_API` - WellnessLiving server domain.
- `CONFIG_AUTHORIZE_ID` - application ID.

Then you must understand 2 authentication ways in JS SDK.

**First way** is dedicated for usage inside applications (for example, made with React Native).  
In this case application password presents in SDK and there is access to HTTPOnly cookies.
CSRF is not possible and CSRF protection in not necessary.

**Second way** is dedicated for usage on web-pages (i.e. in browsers).  
There is no application password in JS SDK (otherwise it may be gotten using browser console). 
HTTPOnly cookies are not available.  
CSRF is possible and there is CSRF protection.

Next configuration depends on necessary authentication way.

# Authentication with application password and without CSRF protection
You must redefine next fields in the class `WlSdk_Config_Mixin`:
- ```javascript 
  WlSdk_Config_Mixin.configCredentialsLoad = function()
  {
  	WlSdk_ModelAbstract.a_credentials = {
  		's_code': 'application password here',
  		's_cookie_persistent': 'persistent cookie value here',
  		's_cookie_transient': 'transient cookie value here'
  	};
  
  	return (new WlSdk_Deferred()).resolve().promise();
  };
  ```
  Method that returns authentication information.
- ```javascript
  WlSdk_Config_Mixin.signatureCompose = function(s_signature)
  {
    return '20150518,'+WlSdk_Config_Mixin.CONFIG_AUTHORIZE_ID+',,'+s_signature;
  };
  ```
  Method that makes `Authorization` header value.

# Authentication without application password and with CSRF protection
**1.** While generation of a page by your server it must generate CSRF code (any way you want) and 
  place it on the page (like a JS variable).  
See file `index.php` for example.

**2.** API for getting of strong notepad must be implemented on your server.
It must receive next fields:
- `$_GET['s_key_session']` - week notepad
- `$_GET['s_csrf']` - code of CSRF protection.
  The API must check corresponding of CSRF code. 

The API must return `s_key_secret` (strong notepad) in JSON format.
```PHP
echo json_encode(['s_key_secret' => 'strong notepad here']);
```
It is necessary to send **week notepad** and **CSRF code** to WellnessLiving server to get 
a **strong notepad**.  
Use [PHP SDK](https://github.com/wellnessliving/wl-sdk) for this purpose. 
Model `\WellnessLiving\Core\Request\Api\KeySecretModel`.  
Note that this request signature bases on application password. 
So, this way uses application password, but there is no application password in **JS SDK**.

If you get any error return is from the API in this way:
```PHP
echo json_encode(['s_error' => 'Error message']);
```
See file `secret.php` for example.

**3.** For the class `WlSdk_Config_Mixin` redefine next fields:
- `URL_CSRF` - API for getting of strong notepad. 
- `CSRF_CODE` - CSRF code. You can set it on your page as global JS variable. And use its value here.

[To understand this way better, read this.](AboutAuthentication.md) 