$(document).ready(function () {    
   function showText(){
       alert(`${$('#s1').text()} ${$('#s2').text()} ${$('.second i').text()} ${$('q').text()} ${$('body > span:nth-child(5)').text()}`);       
   }
   showText();
})