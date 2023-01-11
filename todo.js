var addInput= document.getElementById('input');
var addBtn= document.getElementById('btn');
var toDoContainer= document.getElementById('toDoContainer');

addBtn.addEventListener('click',function() {
    var paragraph=document.createElement('p'); //creating a new Element p tag,named paragraph
    paragraph.innerText=input.value; //takes the input value and saves it in paragraph's innertext
    toDoContainer.appendChild(paragraph); //paragraph Element is appended from toDoContainer

    input.value=""; //empty the textbox once a task is added

    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration="line-through";  //strike through in the task by single click
        })
        
        paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph); 
//delete a task by double click
        })
})
Footer
