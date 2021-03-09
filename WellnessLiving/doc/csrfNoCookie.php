<?php

if(empty($_GET['s_session_key']))
{
  echo json_encode(['s_error' => "'s_session_key' parameter is empty."]);
  exit;
}

require_once '/mnt/d/www/wl-sdk/WellnessLiving/wl-autoloader.php';
require_once '/mnt/d/www/wl-sdk/config.php';

$o_config = new WlSdkExample\Config();
try
{
  $s_csrf = $o_config->csrfCode($_GET['s_session_key']);

  // saving session key in cookie

  echo json_encode([
    's_csrf' => $s_csrf
  ]);
}
catch(\WellnessLiving\WlUserException $e)
{
  echo json_encode(['s_error' => $e->getMessage()]);
}

?>