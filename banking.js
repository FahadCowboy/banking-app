
function catchInputFieldValue(fieldId){
    
    const inputField = document.getElementById(fieldId)
    const inputValue = inputField.value
    const inputConvertedNumber = parseFloat(inputValue)
    inputField.value = ''
    return inputConvertedNumber
}

function CatchOutputFieldValue(fieldId){
    let outputField = document.getElementById(fieldId)
    let outputValue = outputField.innerText
    const outputConvertedNumber = parseFloat(outputValue)
    return outputConvertedNumber
}

function pushInputValue(outputFieldId, inputValue, isAdd){
    
    const outputValue = CatchOutputFieldValue(outputFieldId)

    if(isAdd){
        addingInputAndOutput = outputValue + inputValue
    } else{
        addingInputAndOutput = outputValue - inputValue
    }
    document.getElementById(outputFieldId).innerText = addingInputAndOutput
}



//Deposit and balance calculation 
document.querySelector('#deposit-btn').addEventListener('click', function(){
    // debugger
    const depositNewAmount = catchInputFieldValue('deposit-input')

    if(typeof depositNewAmount === 'number' && depositNewAmount > 0){
        pushInputValue('deposit-amount', depositNewAmount, true)
        pushInputValue('balance-amount', depositNewAmount, true)
    }
})

// Widthdraw calculation
document.querySelector('#withdraw-btn').addEventListener('click', function(){

    const withdrawNewAmount = catchInputFieldValue('withdraw-input')
    
    if(typeof withdrawNewAmount === 'number' && (withdrawNewAmount > 0 && withdrawNewAmount <= CatchOutputFieldValue('balance-amount'))){
        pushInputValue('balance-amount', withdrawNewAmount, false)
        pushInputValue('withdraw-amount', withdrawNewAmount, true)
    }
})


// //Deposit and balance calculation 
// document.querySelector('#deposit-btn').addEventListener('click', function(){
//     //This is new deposit amount waiting to be added to active amount
//     const depositNewAmount = parseFloat(document.querySelector('#deposit-input').value)

//     if(typeof depositNewAmount === 'number' && depositNewAmount > 0){
//         //Here deposit active amount holder element is selecte in 'depositHolderSelect' valiable
//         let depositHolderSelect = document.querySelector('#deposit-amount')

//         //Here deposit active amount is is converted to number
//         let depositActiveAmount = parseFloat(depositHolderSelect.innerText)

//         //Here I added active amount and new amount
//         depositActiveAmount += depositNewAmount

//         //Here i have pushed new total amout to the main deposit active amount holder element.
//         depositHolderSelect.innerText = depositActiveAmount

// //Here we are going to update out balance along with deposit
//         //Selecting balance amount holder element
//         const balanceHolderSelect = document.querySelector('#balance-amount')

//         /*Here Balnce active amount is converted to number then added with new deposit amount
//           then stored in 'balenceNewAmount' vriable. */
//         let balenceNewAmount = depositNewAmount + parseFloat(balanceHolderSelect.innerText)

//         //Here i have pushed new total amount to the main balance active amount holder element.
//         balanceHolderSelect.innerText = balenceNewAmount

// //Here I have made deposit field blank
//         document.querySelector('#deposit-input').value = ''
//     }
// })

// // Widthdraw calculation
// document.querySelector('#withdraw-btn').addEventListener('click', function(){
//     //Selecting balance amount holder element
//     const balanceHolderElement = document.querySelector('#balance-amount')

//      //Here Balnce active amount is converted to number
//     const balanceActiveAmount = parseFloat(balanceHolderElement.innerText)

//     //This is withdraw amount waiting to be added to active withdraw amount
//     const withdrawNewAmount = parseFloat(document.querySelector('#withdraw-input').value)
    
//     if(typeof withdrawNewAmount === 'number' && (withdrawNewAmount > 0 && withdrawNewAmount <= balanceActiveAmount)){
//         //Here withdraw holder element is selected
//         const withdrawHolderSelect = document.querySelector('#withdraw-amount')

//         //Here withdraw active amount is converted to number to be calculated
//         let withdrawActiveAmount = parseFloat(withdrawHolderSelect.innerText)

//         //Here we have pushed new total withdrawn amount to main withdraw element
//         withdrawHolderSelect.innerText = withdrawNewAmount + withdrawActiveAmount

//         //Here subtract withdraw amount from main balence 
//         balanceHolderElement.innerText = balanceActiveAmount - withdrawNewAmount

//         //Here I have made withdraw field blank
//         document.querySelector('#withdraw-input').value = ''
//     }
// })
