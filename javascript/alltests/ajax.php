<?php
/**
 * Created by PhpStorm.
 * User: Acer
 * Date: 23/01/17
 * Time: 15:27
 */
$ville = "";

switch ($_GET["city"]) {
    case "p": $ville = "paris";    break;
    case "m": $ville = "marseille"; break;
    case "g": $ville = "gronoble";  break;
    default :  $ville = "gotamity";
}
sleep (1);
if ($ville != "gronoble") echo "c'est une reponse du serveur de la ville du " . $ville;