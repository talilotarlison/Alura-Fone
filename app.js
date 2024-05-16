//https://stackoverflow.com/questions/15148659/how-can-i-use-queryselector-on-to-pick-an-input-element-by-name

let tela = document.querySelector('input[type=tel]')

//tela.value = 1313

let btns = document.querySelectorAll('input[type=button]')
console.log(btns)
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        tela.value += e.target.value
    })
})