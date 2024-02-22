const entryEl = document.querySelector(".entry");

const keys = document.getElementsByClassName("key");

const operations = document.getElementsByClassName("operation");

const equal = document.querySelector(".equal");

const clear = document.querySelector(".clear");

let currValue = "";
let currOperation = "";

entryEl.textContent = "";

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", function() {
        entryEl.textContent += keys[i].textContent;
    })
}

for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", function() {
        currValue = entryEl.textContent;
        currOperation = operations[i].textContent;
        entryEl.textContent = "";
    })

}

equal.addEventListener("click", function() {
    if (currOperation === "+") {
        entryEl.textContent = Number(currValue) + Number(entryEl.textContent);
    }
    if (currOperation === "-") {
        entryEl.textContent = Number(currValue) - Number(entryEl.textContent);
    }
    if (currOperation === "x") {
        entryEl.textContent = Number(currValue) * Number(entryEl.textContent);
    }
    if (currOperation === "÷") {
        entryEl.textContent = Number(currValue) / Number(entryEl.textContent);
    }
    currValue = "";
    currOperation = "";
})

clear.addEventListener("click", function() {
    entryEl.textContent = "";
    currValue = "";
    currOperation = "";
})