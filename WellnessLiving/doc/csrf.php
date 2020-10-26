<?php

function csrf():string
{
  return hash('sha3-512','75435722612780252161'.session_id());
}

?>