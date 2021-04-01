let list = document.querySelector('.list');
let fieldInput = document.querySelector('.input-field__input');
let field = document.querySelector('.field');
let fieldTags = document.querySelector('.input-field__tags')

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
        fieldInput.classList.add('on');
        
        buttonAdd.addEventListener('click', function(){
            if(fieldInput.value !== ''){
                let listTag = document.createElement('li');
                listTag.className = 'list__tag';
                list.appendChild(listTag);
                listTag.textContent = fieldInput.value;
                fieldInput.value = '';
            } 
            for (tag of fieldTags.children) {
                let listTag = document.createElement('li');
                listTag.className = 'list__tag';
                list.appendChild(listTag);
                listTag.textContent = tag.textContent;
            }
            fieldTags.classList.remove('tags-input');
            fieldTags.innerHTML = '';
        })
        
        buttonCancel.addEventListener('click', function(){
            buttons.remove();
            fieldInput.value = '';
            fieldInput.classList.remove('on');
            fieldTags.classList.remove('tags-input');
            fieldTags.innerHTML = '';
        })
    }
}

fieldInput.addEventListener('keydown', function(evt){
    if(evt.keyCode===32) {
        evt.preventDefault()
        let tag = document.createElement('div');
        tag.className = 'tag';
        fieldTags.appendChild(tag);
        tag.textContent = fieldInput.value;
        fieldInput.value = '';
        fieldTags.classList.add('tags-input')
    }
})

fieldInput.addEventListener('keydown', function(evt){
    if(evt.keyCode===8) {
        if(fieldInput.value === ''){
            let lastTag = fieldTags.lastChild
            lastTag.remove();
        }
    }
})