const previousOperandTextElement = document.getElementById('prev-operand')
const currentOperandTextElement = document.getElementById('current-operand')

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.output = document.getElementById('output')
        this.sign = document.getElementById('sign')
        this.allClear = document.getElementById('ac')
        this.del = document.getElementById('del')
        this.divide = document.getElementById('divide')
        this.one = document.getElementById('one')
        this.two = document.getElementById('two')
        this.three = document.getElementById('three')
        this.multiply = document.getElementById('multiply')
        this.four = document.getElementById('four')
        this.five = document.getElementById('five')
        this.six = document.getElementById('six')
        this.plus = document.getElementById('plus')
        this.seven = document.getElementById('seven')
        this.eight = document.getElementById('eight')
        this.nine = document.getElementById('nine')
        this.minus = document.getElementById('minus')
        this.dot = document.getElementById('dot')
        this.zero = document.getElementById('zero')
        this.equals = document.getElementById('equals')

        this.clear()

        this.updateOutput()
    }

    clear() {
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }

        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getOutputNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerOutput
        if (isNaN(integerDigits)) {
            integerOutput = ''
        } else {
            integerOutput = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0})
        }
        if (decimalDigits != null) {
            return `${integerOutput}.${decimalDigits}`
        } else {
            return integerOutput
        }
    }

    updateOutput() {
        this.currentOperandTextElement.innerText = this.getOutputNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getOutputNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

calculator.allClear.addEventListener('click', () => {
    calculator.clear()
    calculator.updateOutput()
})

calculator.del.addEventListener('click', () => {
    calculator.delete()
    calculator.updateOutput()
})

calculator.sign.addEventListener('click', () => {
    calculator.currentOperandElement = calculator.currentOperandElement * -1
    calculator.updateOutput()
})

calculator.divide.addEventListener('click', () => {
    calculator.chooseOperation("/")
    calculator.changeBg()
    calculator.updateOutput()
})

calculator.multiply.addEventListener('click', () => {
    calculator.chooseOperation("*")
    calculator.updateOutput()
})

calculator.minus.addEventListener('click', () => {
    calculator.chooseOperation("-")
    calculator.updateOutput()
})

calculator.plus.addEventListener('click', () => {
    calculator.chooseOperation("+")
    calculator.updateOutput()
})

calculator.equals.addEventListener('click', () => {
    calculator.compute()
    calculator.updateOutput()
})

calculator.zero.addEventListener('click', () => {
    calculator.appendNumber("0")
    calculator.updateOutput()
})

calculator.one.addEventListener('click', () => {
    calculator.appendNumber("1")
    calculator.updateOutput()
})

calculator.two.addEventListener('click', () => {
    calculator.appendNumber("2")
    calculator.updateOutput()
})

calculator.three.addEventListener('click', () => {
    calculator.appendNumber("3")
    calculator.updateOutput()
})

calculator.four.addEventListener('click', () => {
    calculator.appendNumber("4")
    calculator.updateOutput()
})

calculator.five.addEventListener('click', () => {
    calculator.appendNumber("5")
    calculator.updateOutput()
})

calculator.six.addEventListener('click', () => {
    calculator.appendNumber("6")
    calculator.updateOutput()
})

calculator.seven.addEventListener('click', () => {
    calculator.appendNumber("7")
    calculator.updateOutput()
})

calculator.eight.addEventListener('click', () => {
    calculator.appendNumber("8")
    calculator.updateOutput()
})

calculator.nine.addEventListener('click', () => {
    calculator.appendNumber("9")
    calculator.updateOutput()
})

calculator.dot.addEventListener('click', () => {
    calculator.appendNumber(".")
    calculator.updateOutput()
})