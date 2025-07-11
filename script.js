const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const inputvalue = document.getElementById('value-real');
const selectCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let selectedConverted = 0;

function handleSubmit(event) {
    event.preventDefault();

    const value = inputvalue.value;
    const currency = selectCurrency.value;

    if (!value || value <= 0 || isNaN(value)) {
        alert('Por favor, insira um valor válido.');
        return;
    }
    else if (!currency) {
        alert('Por favor, selecione uma moeda.');
        return;
    }

    converter(value, currency);
}

function converter(value, currency) {
    let convertedValue;

    switch (currency) {
        case 'USD':
            convertedValue = (value / 5.25).toFixed(2);
            result.innerHTML = `US$ ${convertedValue}`;
            animateResult()
            break;
        case 'EUR':
            convertedValue = (value / 6.00).toFixed(2);
            result.innerHTML = `€ ${convertedValue}`;
            animateResult()
            break;
        case 'GBP':
            convertedValue = (value / 7.00).toFixed(2);
            result.innerHTML = `£ ${convertedValue}`;
            animateResult()
            break;
        case 'JPY':
            convertedValue = (value / 0.04).toFixed(2);
            result.innerHTML = `¥ ${convertedValue}`;
            animateResult()
            break;
        case 'AUD':
            convertedValue = (value / 3.80).toFixed(2);
            result.innerHTML = `A$ ${convertedValue}`;
            animateResult()
            break;
        case 'CAD':
            convertedValue = (value / 4.00).toFixed(2);
            result.innerHTML = `C$ ${convertedValue}`;
            animateResult()
            break;
        case 'CHF':
            convertedValue = (value / 5.50).toFixed(2);
            result.innerHTML = `CHF ${convertedValue}`;
            animateResult()
            break;
        case 'CNY':
            convertedValue = (value / 0.80).toFixed(2);
            result.innerHTML = `¥ ${convertedValue}`;
            animateResult()
            break;
    }

    inputvalue.value = '';
}

function animateResult() {
    return result.animate([
        { transform: 'translateY(-120px)', opacity: 0 },
        { transform: 'translateY(0px)', opacity: 1 }
    ], { duration: 500, easing: 'ease-out' });
}


