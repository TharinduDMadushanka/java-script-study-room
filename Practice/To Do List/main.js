// Validate input field.If user input nothing and press add button this alert should display
document.querySelector('#push').onclick=function(){
    if(document.querySelector('#newtask input').value.length==0){
        alert("Please Enter a Task")
    }
    else{ // If user input somethingit should be add in to the tasks tab
        document.querySelector('#tasks').innerHTML
        += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                Delete
    
            </button>
        </div> `;

        // Deleting the task

        var current_tasks=document.querySelectorAll(".delete");
        for(var i=0;i<current_tasks.length;i++){
            current_tasks[i].onclick=function(){
                this.parentNode.remove();
            }
        }

        // Crossing out complete tasks
        var tasks=document.querySelectorAll(".task");
        for(var i=0;i<tasks.length;i++){
            tasks[i].onclick=function(){
                this.classList.toggle('completed');
            }
        }

        //Clearing input field after each entry
        document.querySelector("#newtask input").value="";
    }    
}