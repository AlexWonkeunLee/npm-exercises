import $ from "jquery";
const sayHello = () => console.log("Hello");
sayHello();
$(document).ready(function(){
    $('body').html("Jquery still working");
});