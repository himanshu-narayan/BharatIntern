function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitFrom = document.getElementById("unit-from").value;
    const unitTo = document.getElementById("unit-to").value;
    const resultElement = document.getElementById("result");

    if (temperatureInput.value === "") {
        resultElement.textContent = "---";
        return;
    }

    const temperature = parseFloat(temperatureInput.value);

    let convertedTemperature;
    let unitSymbol;

    if (unitFrom === "celsius") {
        if (unitTo === "fahrenheit") {
            convertedTemperature = (temperature * 9/5) + 32;
            unitSymbol = "°F";
        } else if (unitTo === "kelvin") {
            convertedTemperature = temperature + 273.15;
            unitSymbol = "K";
        } else if (unitTo === "rankine") {
            convertedTemperature = (temperature + 273.15) * 9/5;
            unitSymbol = "°R";
        }
    } else if (unitFrom === "fahrenheit") {
        if (unitTo === "celsius") {
            convertedTemperature = (temperature - 32) * 5/9;
            unitSymbol = "°C";
        } else if (unitTo === "kelvin") {
            convertedTemperature = ((temperature - 32) * 5/9) + 273.15;
            unitSymbol = "K";
        } else if (unitTo === "rankine") {
            convertedTemperature = temperature + 459.67;
            unitSymbol = "°R";
        }
    } else if (unitFrom === "kelvin") {
        if (unitTo === "celsius") {
            convertedTemperature = temperature - 273.15;
            unitSymbol = "°C";
        } else if (unitTo === "fahrenheit") {
            convertedTemperature = (temperature - 273.15) * 9/5 + 32;
            unitSymbol = "°F";
        } else if (unitTo === "rankine") {
            convertedTemperature = temperature * 9/5;
            unitSymbol = "°R";
        }
    } else if (unitFrom === "rankine") {
        if (unitTo === "celsius") {
            convertedTemperature = (temperature - 491.67) * 5/9;
            unitSymbol = "°C";
        } else if (unitTo === "fahrenheit") {
            convertedTemperature = temperature - 459.67;
            unitSymbol = "°F";
        } else if (unitTo === "kelvin") {
            convertedTemperature = temperature * 5/9;
            unitSymbol = "K";
        }
    }

    resultElement.textContent = convertedTemperature.toFixed(2) + " " + unitSymbol;
}
