<?php
// http://www.ka-net.org/blog/?p=1652
$url="http://asprov.search.yahoo.co.jp/AssistSearchService/V2/webassistSearch?output=iejson&p=".urlencode($_GET[tag]);
$json=file_get_contents($url);
echo $json;
?>