const inputEl = document.querySelector('#font-size-control')
const magicSize = document.querySelector('#text')
// console.log(magicSize)

inputEl.addEventListener('change', event => {
    magicSize.style.fontSize = `${event.target.value}px`
})