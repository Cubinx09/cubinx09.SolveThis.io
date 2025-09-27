const button = document.getElementsByTagName("button")[3]
const a = document.getElementById("a")
const c = document.getElementById("b")

function check(){
    if(button === a){
        alert("Your answer is....CORRECT!")
    } else if(button === b){
        alert("Funny answer but.... INCORRECT!")
    } else{
        alert("Your answer is...INCORRECT!")
    }
}