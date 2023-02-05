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
        var name = prompt("Inform the name of the candidate" , "Digit here");
        var age = prompt("Inform the age of the candidate" , "Digit here");

        if(parseInt(age) >= 18 ){
        alert(`The candidate ${name} it's ready for init of the processs.`);
        } else{
            alert(`The candidate ${name} doesn't ready for init of the processs.`);
}

    </script>
</body>
</html>