const openModal = document.querySelector('.open-modal');
const modalScreen = document.querySelector('.modal-screen');
const xBtn = document.querySelector('.x-btn');
const closeBtn = document.querySelector('.close');
const continueBtn = document.querySelector('.continue');
const todoInput = document.querySelector('.todo-input');
const defaultSec = document.querySelector('.default');
const inProgressSec = document.querySelector('.in-progress');
const completeSec = document.querySelector('.complete');
const trashSec = document.querySelector('.trash');


function openModalHandler() {
    modalScreen.classList.remove('hidden');  
};

function closeModalHandler() {
    modalScreen.classList.add('hidden');
    todoInput.value = '';
};
function dragStartHandler (event) {
    event.dataTransfer.setData('elemId' , `${event.target.id}`);
};
function dragOverHandler(event) {
    event.preventDefault();
};

function dropHandler(event) {
    const mainId = event.dataTransfer.getData('elemId');
    const mainTodo = document.getElementById(`${mainId}`);
    const mainSection = event.target;
    mainSection.appendChild(mainTodo);   
};

function addTodoHandler() {
    const inputValue = todoInput.value;
    const numForId = Math.floor(Math.random()*100000);
    defaultSec.insertAdjacentHTML('beforeend',
        `
        <article class="todo" id="todo-${numForId}" draggable="true" ondragstart="dragStartHandler(event)">
          <p>${inputValue}</p>
        </article>

        `
    );
    closeModalHandler();
};


openModal.addEventListener('click',openModalHandler);
closeBtn.addEventListener('click',closeModalHandler);
xBtn.addEventListener('click',closeModalHandler);
continueBtn.addEventListener('click',addTodoHandler);
