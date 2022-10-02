const bu = document.getElementById("btn");
bu.style.cursor="pointer";
bu.style.justifyContent="center";
bu.style.display="flex";

function show_credits()
{
    const title = document.getElementById("starting_title"); 
    const btn1 = document.getElementById("start");
    const btn2 = document.getElementById("credits");

    title.remove();
    btn1.remove();
    btn2.remove();

    const para = document.createElement("p");
    const node = document.createTextNode("This is a new paragraph.");
    para.appendChild(node);
    
    
}