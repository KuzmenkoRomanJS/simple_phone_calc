let a = '' //first number
let b = '' //second number
let sign = '' //math operation
let finish = false

const digit = ['0', '00', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', '*', '/',]

//screen
const out = document.querySelector('.calc_screen p')

function clearAll () {
    a = ''
    b = ''
    sign = ''
    finish = false
    out.textContent = 0
}

document.querySelector('.ac').onclick = clearAll

document.querySelector('.buttons').onclick = (event) => {
    //press no button
    if (!event.target.classList.contains('btn')) return
    //press button ac
    if (event.target.classList.contains('ac')) return

    out.textContent = ''
    //get press button
    const key = event.target.textContent

    //if press 0-9 button or dot .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key
            out.textContent = a
        } else if (a !== '' && b !== '' && finish) {
            b = key
            finish = false
            out.textContent = b

        } else {
            b += key
            out.textContent = b
            
        }
        return
    }

    //if press - + * /
    if (action.includes(key)) {
        sign = key
        out.textContent = sign
        return
    }

    //press =
    if (key === '=') {
        if (b === '') b = a
        switch (sign) {
            case '+':
                a = (+a) + (+b)
                break
            case '-':
                a = a - b
                break
            case '*':
                a = a * b
                break
            case '/':
                if (b === '0' || b === '00') {
                    out.textContent = 'Error'
                    a = ''
                    b = ''
                    sign = ''
                    return
                }
                a = a / b
                break
        }
        finish = true
        out.textContent = a
    }
}
