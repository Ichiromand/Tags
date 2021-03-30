let list = document.querySelector('.list');
let fieldInput = document.querySelector('.field__input');
let field = document.querySelector('.field');

fieldInput.onclick = function(){
    if(!fieldInput.classList.contains('on')){
        let buttons = document.createElement('div');
        buttons.className = 'field__buttons';
        field.appendChild(buttons);
        let buttonCancel = document.createElement('button');
        buttonCancel.className = 'field__buttons--cancel';
        buttons.appendChild(buttonCancel);
        buttonCancel.textContent = 'Отменить';
        let buttonAdd = document.createElement('button');
        buttonAdd.className = 'field__buttons--add';
        buttons.appendChild(buttonAdd);
        buttonAdd.textContent = 'Добавить';
        fieldInput.classList.add('on')
        
        buttonAdd.addEventListener('click', function(){
            if(fieldInput.value !== ''){
                let listTag = document.createElement('li');
                listTag.className = 'list__tag';
                list.appendChild(listTag);
                listTag.textContent = fieldInput.value;
                fieldInput.value = '';
            }
        })
        
        buttonCancel.addEventListener('click', function(){
            buttons.remove();
            fieldInput.value = '';
            fieldInput.classList.remove('on')
        })
    }
}