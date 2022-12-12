const box = document.querySelector('#insert')
document.addEventListener('keydown', keyCodes)
function keyCodes(event) {

    box.innerHTML =
        `<div class="eachContainer">
        <p>event.key</p>
        <div class="key">${event.key}</div>
        </div> 
        <div class="eachContainer">
        <p>event.keyCode</p>
        <div class="key">${event.code}</div>
        </div> 
        <div class="eachContainer">
        <p>event.code</p> 
        <div class="key">${event.keyCode}</div>
        </div>`
}


