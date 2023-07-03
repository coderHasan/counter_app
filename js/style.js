

let count = 0 

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const style = e.target.classList
        if(style.contains("decrease")){
            count--
        } 
        if (style.contains('increase')){
            count++;
        }
        if (style.contains('reset')){
            count = 0
        }
        if(count > 0) {
            value.style.color= 'green'
        }
        if(count < 0) {
            value.style.color = 'red'
        }
        if(count === 0) {
            value.style.color = 'black'
        }

        value.textContent = count

    }) 
})

