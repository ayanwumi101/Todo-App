const inputForm = document.getElementById('inputForm');
const listContainer = document.getElementById('listContainer');
const list = document.querySelector('.list');
const form = document.querySelector('.todo-form');
const listItems = document.querySelector('.list-items');
const submitBtn = document.getElementById('submitBtn');


form.addEventListener('submit', addItem);
function addItem(e){
    e.preventDefault();
    const value = inputForm.value;
    const html = `<div class="action">
    
    <div class="group">

    <div class="check"></div>
    <div class="activity">${value}</div>

    </div>

    <div class="cross"></div>
  </div>`;

    if(value === ''){

    }else{
        listContainer.innerHTML += html;
        inputForm.value = '';
    }

    const check = document.querySelectorAll('.check');
    const activity = document.querySelectorAll('.activity')
    
    check.forEach(function(item){
        item.addEventListener('click', function(){
           if(item.classList.contains('check-item')){

            item.classList.remove('check-item');
            item.nextElementSibling.classList.remove('line');
      
           }else{
            item.classList.add('check-item');
            item.nextElementSibling.classList.add('line');

           }
        });
    });



    const action  = document.querySelectorAll('.action');
    const cross = document.querySelectorAll('.cross');
   
    
    // action.forEach(function(item){    
    //     item.addEventListener('mouseover', function(e){
            
    //         if(item.classList.){
                
    //         }
            
    //     });
    // });
    
    action.forEach(function(item){    
        item.addEventListener('mouseover', function(e){
            // cross.forEach(function(cup){
            //     cup.classList.add('show-cross');
            // })
            const element = e.currentTarget.lastElementChild;
            element.classList.add('show-cross');
        });
    });


    action.forEach(function(item){    
        item.addEventListener('mouseout', function(e){
            // cross.forEach(function(cup){
            //     cup.classList.remove('show-cross');
            // })
            const element = e.currentTarget.lastElementChild;
            element.classList.remove('show-cross');
        });
    });


    cross.forEach(function(close){
        close.addEventListener('click', function(e){
            const element = e.currentTarget.parentElement;
            listItems.removeChild(element);
            itemsLeft.textContent = (listItems.children.length --) + ' items left';
            if(listItems.children.length <= 1){
                itemsLeft.textContent = (listItems.children.length --) + ' item left';
            }
        });
       
    });

    const itemsLeft = document.querySelector('.items-left');
    itemsLeft.textContent = listItems.children.length + ' items left';
    if(listItems.children.length <= 1){
        itemsLeft.textContent = (listItems.children.length --) + ' item left';
    }




             const completedBtn = document.querySelector(".completed");

            completedBtn.onclick = function() {
            const action = document.querySelectorAll(".action");
            const completed = document.getElementsByClassName("line");

            for (let i = 0; i < action.length; i++) {
                action[i].style.display = "none";
            }

            for (let j = 0; j < completed.length; j++) {
                const parent = completed[j].parentElement;
                parent.parentElement.style.display = "block";
                parent.parentElement.style.display = "flex";
                
            }
            completedBtn.classList.add('active');
            
        }



        const uncompleted = document.querySelector('.uncompleted');
        uncompleted.addEventListener('click', function(){
            const action = document.querySelectorAll('.action');
            const activity = document.querySelectorAll('.activity');
            action.forEach(function(item){
                activity.forEach(function(act){
                    if(!act.classList.contains('line')){
                        act.parentElement.parentElement.style.display = 'block';
                        act.parentElement.parentElement.style.display = 'flex';
                    }
                });
                item.style.display = 'none';
            });
            uncompleted.classList.add('active');
        });



        const all = document.querySelector('.all');
        all.addEventListener('click', function(){
            const action = document.querySelectorAll('.action');
            action.forEach(function(item){
                item.style.display = 'block';
                item.style.display = 'flex';
            });
        });



        const clearCompleted = document.querySelector('.clear-completed');
        clearCompleted.addEventListener('click', function(){
            const action = document.querySelectorAll('.action');
            const activity = document.querySelectorAll('.activity');
            action.forEach(function(item){
                activity.forEach(function(act){
                    if(act.classList.contains('line')){
                        const remove = act.parentElement.parentElement;
                        listItems.removeChild(remove);
                        //const itemsLeft = document.querySelector('.items-left');
                        itemsLeft.textContent = listItems.children.length + ' items left';
                        if(listItems.children.length <= 1){
                            itemsLeft.textContent = listItems.children.length + ' item left';
                        }
                    }
                });
            });
        });


    //          const completed = document.querySelector('.completed');
    //          completed.addEventListener('click', function(){
    //                  if(){
                         
    //                  }
                         
    //             });


    //             const clearCompleted = document.querySelector('.clear-completed');
    //             clearCompleted.addEventListener('click', function(){
    //                     if(){
                            
    //                     }
                            
    //                });
    // const todo = document.querySelectorAll('.todo')
    // todo.forEach(function(test){
    //     test.addEventListener('mouseout', function(e){
    //         e.currentTarget();
    //         const cross = document.querySelectorAll('.cross');
    //         cross.forEach(function(me){
    //             me.classList.add('man');
    //         })
    // });
    // });

    all.classList.add('active');

}





