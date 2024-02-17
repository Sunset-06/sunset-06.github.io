if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

const arr=["about","edu","skills","contact"];
let i=0;
window.addEventListener("scroll",animtrig);

function animtrig(){
        let trig=document.getElementById(arr[i]);
        let rect=trig.getBoundingClientRect();
        //console.log(rect);
        if(rect.top<3){
            document.querySelector(`#${arr[i]} > h2`).classList.add("trig");
            document.querySelectorAll(`#${arr[i]} > p`).classList.add("trig");
            console.log(trig.innerHTML);
            i++;   
        }
}
