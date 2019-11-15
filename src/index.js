import $ from "jquery";
import hello from "./say-hello";
const sayHello = () => console.log("Hello");
sayHello();
$(document).ready(function(){
    $('body').html("Jquery still working");
    console.log(hello);
});