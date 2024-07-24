function convert() {
    const tempInput = parseFloat(document.getElementById('textBox').value);
    const tempUnit = document.querySelector('input[name="unit"]:checked').value;

    let celsius, fahrenheit, kelvin;
    if (tempUnit === 'C') {
        celsius = tempInput;
        fahrenheit = (tempInput * 9/5) + 32;
        kelvin = tempInput + 273.15;
    } else if (tempUnit === 'F') {
        celsius = (tempInput - 32) * 5/9;
        fahrenheit = tempInput;
        kelvin = (tempInput - 32) * 5/9 + 273.15;
    } else if (tempUnit === 'K') {
        celsius = tempInput - 273.15;
        fahrenheit = (tempInput - 273.15) * 9/5 + 32;
        kelvin = tempInput;
    }

    document.getElementById('outcomeC').textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('outcomeF').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('outcomeK').textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
}