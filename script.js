const modal = document.querySelector('.modal-cart');
const change = document.querySelectorAll('.change');
const set = document.querySelector('.set-address');
const add = document.querySelector('.add-address');
const billed = document.querySelector('.billed');
const shipped = document.querySelector('.shipped');
const select = document.querySelector('.select');
const flat = document.querySelector('input[name=flat]');
const street = document.querySelector('input[name=street]');
const city = document.querySelector('input[name=city]');
const zip = document.querySelector('input[name=zip]');
const country = document.getElementById('country')
const form = document.getElementById("myform");
const choice = document.querySelector('.select-add');
const exist = document.querySelector(".existing");
const nw = document.querySelector(".new");
const debit = document.querySelector('.payment');
const cardnum = document.querySelectorAll(".card-num")
const validationStatus = document.querySelectorAll("#validation-status");
const validation = document.querySelectorAll("#validation");
const cvv = document.querySelectorAll(".cvv-num");
const denim = document.querySelector(".pri-d");
const habour = document.querySelector(".pri-h");
const quantd = document.querySelector("#quantity-d");
const quanth = document.querySelector("#quantity-h");
const final = document.querySelector(".final");
const pay = document.querySelectorAll(".payamount");
const remove = document.querySelector(".remove-d");
const removeh = document.querySelector(".remove-h");
const discount = document.querySelector(".dis-h");
const disc = document.querySelector(".dis-d");
let total;

remove.addEventListener("click", removed);
removeh.addEventListener("click", removeharbour);
quantd.addEventListener("click", payd);
quanth.addEventListener("click", payh);

debit.addEventListener("click", payment);

nw.addEventListener("click", active);

for (let i = 0; i < change.length; i++) {
    change[i].onclick = active;
}

set.addEventListener("click", setad);
form.addEventListener('submit', addad);

function active() {
    modal.classList.add("bg-active");
}


function close() {
    modal.classList.remove("bg-active");
}

var newadd;

function setad() {

    const bill = document.querySelectorAll('#set-b');
    const ship = document.querySelectorAll('#set-s');

    for (let i = 0; i < bill.length; i++) {

        if (bill[i].checked)
            newadd = bill[i].parentNode.parentNode.parentNode.childNodes[1].innerText;
    }
    billed.innerText = newadd;
    for (let i = 0; i < ship.length; i++) {
        if (ship[i].checked)
            newadd = ship[i].parentNode.parentNode.parentNode.childNodes[1].innerText;
    }
    shipped.innerText = newadd;
    close();
}


function addad(e) {

    e.preventDefault();
    const newaddress = flat.value + " " + street.value + " " + city.value + " " + country.value + " " + zip.value;
    flat.value = "";
    street.value = "";
    city.value = "";
    zip.value = "";
    country.value = "";
    const p = document.createElement("p");
    const para = document.createElement("p");
    para.classList.add("e-bill");
    para.innerText = newaddress;
    const div = document.createElement("div");
    div.classList.add("e-add");
    div.appendChild(p);
    div.appendChild(para);
    const clone = choice.cloneNode(true);
    div.appendChild(clone);

    const outer = document.createElement("div");
    outer.classList.add("bill");

    outer.appendChild(div);

    exist.appendChild(outer);

}

function payment() {
    var option = document.querySelectorAll('#pay');

    for (let i = 0; i < option.length; i++) {
        if (option[i].checked)
            console.log(option[i].parentNode.parentNode.childNodes[3].style.display = 'block');
        else {
            option[i].parentNode.parentNode.childNodes[3].style.display = 'none';
        }
    }
}

for (let i = 0; i < cardnum.length; i++) {
    cardnum[i].addEventListener("input", function() {
        const inputText = cardnum[i].value;
        if (inputText.length === 0) {
            validationStatus[i].textContent = "";
            return;
        }
        if (inputText.length !== 16) {
            validationStatus[i].textContent = "Please enter a 16-digit number.";
            return;
        }
        validationStatus[i].textContent = "";
    });
}

for (let i = 0; i < cvv.length; i++) {
    cvv[i].addEventListener("input", function() {
        const inputText = cvv[i].value;
        if (inputText.length === 0) {
            validation[i].textContent = "";
            return;
        }
        if (inputText.length !== 3) {
            validation[i].textContent = "Please enter a 3-digit number.";
            return;
        }

        validation[i].textContent = "";
    });
}
disc.innerText = quantd.value+".00";
discount.innerText = quanth.value+".00";
var x = quantd.value * 32;
var y = quanth.value * 46;
let remd = false;
let remh = false;

function payd() {
disc.innerText = quantd.value+".00";
    if (remd)
        x = 0;
    else
        x = quantd.value * 32;
    denim.innerText = "$" + x + ".00";
    total = x + y + 10;
    finalise();

}

function payh() {
discount.innerText = quanth.value+".00";

    if (remh)
        y = 0;
    else
        y = quanth.value * 46;
    habour.innerText = "$" + y + ".00";
    total = x + y + 10;
    finalise();

}

function finalise() {

  if(total === 10)
    total =0;

    pay.forEach(function(e) {
        e.innerText = total;
    });

    final.innerText = "$" + (total);



}

function removed() {

    remove.parentNode.parentNode.style.display = "none";
    remd = true;
    payd();

}

function removeharbour() {

    removeh.parentNode.parentNode.style.display = "none";
    remh = true;
    payh();

}