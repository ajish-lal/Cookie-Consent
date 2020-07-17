// var script = document.createElement('script');
// script.type = 'text/javascript';
// var code = 'YETT_BLACKLIST = [/facebook/, /hotjar/, /google-analytics/, /doubleclick/, /googleadservices/, /yandex/]';
// script.appendChild(document.createTextNode(code));
// document.head.appendChild(script);


// function reqListener() {
//     console.log(this.responseText);
//     window.YETT_BLACKLIST = [/googletagmanager/, /facebook/, /hotjar/, /google-analytics/, /doubleclick/, /googleadservices/, /yandex/, /izooto/];
// }

// var oReq = new XMLHttpRequest();
// oReq.onload = reqListener;
// oReq.open("get", "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js", true);
// oReq.send();

window.YETT_BLACKLIST = [/googletagmanager/, /facebook/, /hotjar/, /google-analytics/, /doubleclick/, /googleadservices/, /yandex/, /izooto/];