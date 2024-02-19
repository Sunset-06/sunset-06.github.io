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
        if(i>3)
            return;
        let trig=document.getElementById(arr[i]);
        let rect=trig.getBoundingClientRect();
        if(rect.top<3){
            document.querySelector(`#${arr[i]} > h2`).classList.add("trig");
            document.querySelector(`#${arr[i]} > .content`).classList.add("trig");
            i++;   
        }
}