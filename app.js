const inputElement = document.querySelector('.input-main')
const createBtn = document.querySelector('.btn')
const listElement = document.querySelector('.list-group')

createBtn.onclick = () => {
    if (inputElement.value == '') {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote))
    inputElement.value = ''
}

function getNoteTemplate(note) {
    return `<li class="list-item">
    <span>${note.title}</span>
    <span>           
    </span>
</li>`
}