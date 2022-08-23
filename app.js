
var questions = document.getElementsByClassName("question");

// var i ;

for(let i=0; i<questions.length ; i++){
    questions[i].addEventListener("click",function(){
        console.log(this);
        this.classList.toggle("active");

        var panel = this.lastElementChild;
        if(panel.style.display === "block"){
            panel.style.display = "none";
            panel.parentElement.firstElementChild.lastElementChild.style.transform = "rotate(180deg)"

        } else{
            panel.style.display = "block"
        }

    });
}
