let data = `[
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]`;

data = JSON.parse(data);
const charts = document.querySelectorAll(".charts div .col");
let total = 0;
for (let i = 0; i < charts.length; i++) {
  total += data[i]["amount"];
  charts[i].style.height = `${Math.trunc(data[i]["amount"]) * 2}px`;
  charts[i].firstElementChild.textContent = `$${data[i]["amount"]}`;
  charts[i].nextElementSibling.textContent = data[i]["day"];
  charts[i].addEventListener("mouseover", function (event) {
    this.firstElementChild.classList.add("show");
    if (parseInt(this.style.height) > 50) {
      this.classList.add("cyan");
    } else {
      this.style.opacity = 0.8;
    }
  });
  charts[i].addEventListener("mouseleave", function (event) {
    this.firstElementChild.classList.remove("show");
    if (parseInt(this.style.height) > 50) {
      this.classList.remove("cyan");
    } else {
      this.style.opacity = 1;
    }
  });
}

let totalNumber = document.querySelector(".total-number .number");
totalNumber.textContent = `$${total}`;
// console.log(parseInt("$214.2".slice(1)));
