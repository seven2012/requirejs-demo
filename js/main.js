require.config({
    paths: {
        jquery: 'jquery'
    }
})

require(['jquery'], function ($) {
    alert("jquery is already...");
})

let sayHi = document.createElement('p')
sayHi.innerText = 'Hello World!'
document.body.appendChild(sayHi)
