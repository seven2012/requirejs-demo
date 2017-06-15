require.config({
    paths: {
        jquery: 'jquery'
    }
})

require(['jquery'], function ($) {
    let $sayHi = $('<h1>Hello World</h1>')
    $sayHi.appendTo('body')
})
