var mouse_event="empty" ;
var last_postion_ofX,last_postion_ofY ;
canvas=document.getElementById("myCanvas") ;
ctx=canvas.getContext("2d");
color="blue";
width_of_line=2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("colour").value ;
    width_of_line=document.getElementById("width_of_line").value ; 
    mouse_event ="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_postion_ofX=e.clientX-canvas.offsetLeft;
    current_postion_ofY=e.clientY-canvas.offsetTop;
    if(mouse_event == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_postion_ofX,last_postion_ofY);
        ctx.lineTo(current_postion_ofX,current_postion_ofY);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event ="mouseLeave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event ="mouseUp";
}