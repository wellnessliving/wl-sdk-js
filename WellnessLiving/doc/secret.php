<?php

if(empty($_GET['s_key_session']))
{
  echo json_encode(['s_error' => "'s_key_session' parameter is empty."]);
  exit;
}

require 'csrf.php';

$s_csrf = csrf();

if(empty($_GET['s_csrf'])||$_GET['s_csrf']!==$s_csrf)
{
  echo $_GET['s_csrf'].' '.$s_csrf;
  echo json_encode(['s_error' => "Page has a wrong code."]);
  exit;
}

require_once '/mnt/d/www/wl-sdk/WellnessLiving/wl-autoloader.php';
require_once '/mnt/d/www/wl-sdk/config.php';

$o_config = new WlSdkExample\Config();

$o_secret = new \WellnessLiving\Core\Request\Api\KeySecretModel($o_config);
$o_secret->s_csrf = $_GET['s_csrf'];
$o_secret->s_key_session = $_GET['s_key_session'];
$o_secret->url_origin = 'http://stable.wellnessliving.lc';
try
{
  $o_secret->get();
}
catch(\WellnessLiving\WlUserException $e)
{
  echo json_encode(['s_error' => $e->getMessage()]);
  exit;
}

echo json_encode(['s_key_secret' => $o_secret->s_key_secret]);
exit;

?>