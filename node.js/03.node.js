let http = require("http");
let server = http.createServer((require, response) => {
    console.log('过来了');
    require.setHeader('content-type', 'text/html;charset=utf-8');
    let messte = "徐攀大傻逼";
    require.end(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    h1{
        font-size: 150px;
        color: yellow;
    }
    </style>
</head>
<body>
    <h1>${messte}</h1>
</body>
</html>`)

})
server.listen(80, "10.254.4.186", ()=>console.log("徐攀傻傻的"))