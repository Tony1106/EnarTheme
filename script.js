 $(function(){

     
let buttons = document.querySelectorAll(".why-choose-us-button button");

for (let index = 0; index< buttons.length; index++) {

    buttons[index].onclick = function(){
        for(let j=0; j < buttons.length; j++) {
            buttons[j].classList.remove('hightlight')
        }
        buttons[index].classList.add('hightlight');
        let content = document.querySelectorAll(".why-choose-us-content li .content");
        for(let i=0; i < content.length; i++) {
            content[i].classList.remove("active");
           
        }
        content[index].classList.add('active');
    }

} 

window.onscroll = function(){
    stickyHeader()}
    const header = document.querySelector(".menu");
    let stickyPosition = header.offsetTop;
    const body = document.querySelector(".body-container")

    function stickyHeader(){
        console.log(window.pageYOffset, 'sticky position');
        if (window.pageYOffset > stickyPosition) {
            header.classList.add("sticky");
            body.style.paddingTop = "74px";

         } else {
            header.classList.remove('sticky');
            body.style.paddingTop = "0px";
            }
        }
    
    
})  

 