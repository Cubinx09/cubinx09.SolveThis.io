let modal = document.getElementById("myModal")
let btn = document.getElementById('open')
let span = document.getElementById('close')

btn.onclick = function(){
    modal.style.display = 'block';
}
span.onclick = function(){
    modal.style.display = 'none';
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none';
    }
}
//function correct(){
    //alert("Your answer is.... CORRECT!!")
//}
//function incorrect(){
    //alert("Your answer is.... INCORRECT!!")
//}
//function funny(){
    //alert("Funny answer but it is.... INCORRECT!!")
//}
//function what(){
    //alert("Fair.")
//}