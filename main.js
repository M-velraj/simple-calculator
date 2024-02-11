// get the output screen from html by id 
const op=document.getElementById("output");
// get the all button from the html by tag
const btn=document.getElementsByTagName("button");
// when the button click, this function is run
function display(screen){
    op.value += screen;
}
// when the clear button click, output is all empty 
function clr(){
    op.value=""; 
}
// when the del button click, its delete the number one by one  by using slice 
function del(){
    op.value= op.value.slice(0,-1);
}
// this is calculate all 
function calculate(){
    try{
        op.value=eval(op.value);
    }
    catch(err){
        alert("Invalid")
    }
}
