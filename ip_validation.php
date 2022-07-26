<?php

function isValidIP(string $str): bool
{
  if (substr_count($str, '.') != 3 || substr_count($str, ' ') != 0) {
    return false;
  }
  
  $array = explode(".", $str);
  
  foreach($array as $value) {
    if (!is_numeric($value)) {
        return false;
    }
    if($value < 0 || $value > 255) {
      return false;
    }
  }
  return true;
}

var_dump(isValidIP('@128.22.67.217'));