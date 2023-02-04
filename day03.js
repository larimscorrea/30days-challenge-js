<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var seller, jan, fev,march,media; 

var seller = prompt("Inform the name of the seller", "Digit the name of the seller")
var jan = prompt("Inform how selled in january");
var fev = prompt("Inform how selled in february");
var march = prompt("Inform how selled in march");
var media =  (parseFloat(jan) + parseFloat(fev) + parseFloat(march))/3;
var result = media; 

alert(`The media of the sales it's ${result}.`);
    </script>
</body>
</html>