
const form = document.getElementById('form');
const inputValue = document.getElementById('value-real');
const selectCurrency = document.getElementById('currency');
const result = document.getElementById('result');

// Mapeamento de símbolos — fácil de estender
const symbols = {
    USD: 'US$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    AUD: 'A$',
    CAD: 'C$',
    CHF: 'CHF',
    CNY: '¥'
};

form.addEventListener('submit', handleSubmit);

// Atualiza automaticamente a cada 60s se já houver valor e moeda
setInterval(() => {
    const val = inputValue.value;
    const cur = selectCurrency.value;
    if (val && cur) converter(val, cur);
}, 60_000);

function handleSubmit(e) {
    e.preventDefault();

    // Converte “1,23” → “1.23” e força número
    const raw = inputValue.value.replace(',', '.');
    const value = parseFloat(raw);
    const currency = selectCurrency.value;

    if (!value || value <= 0 || isNaN(value)) {
        alert('Por favor, insira um valor válido.');
        return;
    }
    if (!currency) {
        alert('Por favor, selecione uma moeda.');
        return;
    }

    converter(value, currency);
}

async function converter(value, currency) {
    const url = `https://economia.awesomeapi.com.br/last/${currency}-BRL`;
    try {
        const res = await fetch(url);
        const data = await res.json();

        // Ex: pair = "USDBRL", bid/ask em R$ por 1 USD
        const pair = `${currency}BRL`;
        const rate = parseFloat(data[pair].ask);

        // Real → moeda estrangeira (divide R$ por preço da moeda)
        const converted = (value / rate).toFixed(2);

        // Símbolo ou fallback para o próprio código
        const symbol = symbols[currency] || currency;

        result.innerText = `${symbol} ${converted}`;
        animateResult();

    } catch (err) {
        alert('Erro ao buscar cotação. Tente novamente mais tarde.');
        console.error(err);
    }

    // Opcional: limpa o campo
    inputValue.value = '';
}

function animateResult() {
    result.animate(
        [
            { transform: 'translateY(-20px)', opacity: 0 },
            { transform: 'translateY(0)', opacity: 1 }
        ],
        { duration: 400, easing: 'ease-out' }
    );
}


function animateResult() {
    return result.animate([
        { transform: 'translateY(-120px)', opacity: 0 },
        { transform: 'translateY(0px)', opacity: 1 }
    ], { duration: 500, easing: 'ease-out' });
}




