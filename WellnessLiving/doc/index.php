<?php
  require 'csrf.php';

  $s_csrf = csrf();
  echo "
	<html>
	  <script type=\"text/javascript\">
	    var SDK_CSRF_CODE = '$s_csrf';
	  </script>
	  <script src=\"sdk/Core/Js/Php/get_class.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/Core/Js/Php/empty.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/Core/CoreDate.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/Core/CoreUrl.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/Deferred/SdkDeferred.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/Deferred/SdkPromise.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/AssertException.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/Config/ConfigRegionSid.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/Config/ConfigAbstractMixin.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/Config/SdkConfigMixin.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/AuthorizationSignature.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/ModelAbstract.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/sha256.min.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/sha3.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/SyncError.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/model/Core/Passport/Login/Enter/EnterModel.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/model/Core/Passport/Login/Enter/NotepadModel.js\" type=\"text/javascript\"></script>
	  <script src=\"sdk/model/Core/Request/Api/KeySessionModel.js\" type=\"text/javascript\"></script>
	  <script type=\"text/javascript\">
	  var notepad = new Core_Passport_Login_Enter_NotepadModel();
		notepad.get().done(function()
		{
		  var enter = new Core_Passport_Login_Enter_EnterModel();
		  enter.s_login = 'spa.gromakov@gmail.com';
		  enter.s_notepad = notepad.s_notepad;
		  enter.s_password = notepad.hash('lkchpy91');
		  enter.post().done(function()
		  {
			console.log('User has been authorized');
		  }).fail(function(o_error)
		  {
			if(o_error['s_message'])
			console.log(o_error['s_message']);
			else
			console.log('An error has occurred while attempt to sign in.');
		  });
		}).fail(function(o_error)
		{
		  if(o_error['s_message'])
			console.log(o_error['s_message']);
		  else
			console.log('An error has occurred while attempt to create notepad.');
		});
	  </script>
	</html>
  ";
?>