const cur1 = document.querySelector(".cur-1");
const cur2 = document.querySelector(".cur-2");
const cur1Input = document.querySelector(".cur-1-input");
const cur2Input = document.querySelector(".cur-2-input");

const baseRate = document.querySelector(".base");
const switchCur = document.querySelector(".switch-cur");

const countries = [
    {
        name: "AED",
        flagURL: "",
    },

    {
        name: "EUR",
        flagURL: "",
    },

    {
        name: "GBP",
        flagURL: "",
    },

    {
        name: "USD",
        flagURL: "",
    }
];

const apiURL = "https://v6.exchangerate-api.com/v6/";
const key = "093352694b431c8342cff984";

// Get Exchange Rate
async function getExchangeRate() {
    const cur1Value = cur1.value;
    const cur2Value = cur2.value;

    const response = await fetch(`${apiURL}${key}/latest/${cur1Value}`);
    const data = await response.json();
    console.log(data);

    const rate = data.conversion_rates[cur2Value];
    baseRate.textContent = `1 ${cur1Value} = ${rate.toFixed(2)} ${cur2Value}`;

    cur2Input.value = (cur1Input.value * rate).toFixed(2);
}

getExchangeRate();

// Add Event Listeners
cur1.addEventListener("change", () => {
    getExchangeRate();
    getFlag();
});

cur2.addEventListener("change", () => {
    getExchangeRate();
    getFlag();
});

cur1Input.addEventListener("input",getExchangeRate);
cur2Input.addEventListener("input",getExchangeRate);

switchCur.addEventListener("click", () => {
    const cur1Val = cur1.value;
    cur1.value = cur2.value;
    cur2.value = cur1Val;
    switchCur.classList.toggle("rotate");
    getExchangeRate();
    getFlag();
});
//  Get Flag
function getFlag() {
    countries.forEach((country) => {
        console.log(country.name);
    });
}