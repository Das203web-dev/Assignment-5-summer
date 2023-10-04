let total = '';
let orderdNumber = 1;
function getTarget(id, title, price) {
    let productDiv = document.getElementById(id); //getting targeted div id
    let prodTitle = document.getElementById(title); //getting targeted div product title
    let prodPrice = document.getElementById(price); //getting product price by id
    let applyBtn = document.getElementById('apply-btn'); //getting apply button
    let priceInnerText = prodPrice.innerText;//getting product price innerText
    let totalPriceDisplay = document.getElementById('total-price');//getting total price field
    let innerTextOfTotalPrice = totalPriceDisplay.innerText; //getting total price innertext
    let parseTotalPrice = parseFloat(innerTextOfTotalPrice);//
    let priceFloat = parseFloat(priceInnerText);
    total = parseTotalPrice + priceFloat;//summation of products 
    totalPriceDisplay.innerText = total;
    let finalTotal = document.getElementById('final-total');
    finalTotal.innerText = total;
    let prodTitleInnerText = prodTitle.innerText; //getting title innertext
    let cartInfo = document.getElementById('orderd-list'); //getting cart ol
    let li = document.createElement("li"); //creating li
    li.style.fontSize = "24px";
    li.style.fontWeight = "500";
    li.style.padding = "5px 16px";
    li.innerText = `${orderdNumber}. ${prodTitleInnerText}`;//setting up li innertext dynamically according to div click
    orderdNumber++; //increasing ordered number
    cartInfo.appendChild(li); //appending li into ol
    let purchaseBtn = document.getElementById("purchase-btn");
    // checking the price is empty or not 
    if (innerTextOfTotalPrice < 0) {
        purchaseBtn.setAttribute('disabled', true)
    }
    else {
        purchaseBtn.removeAttribute('disabled');
        purchaseBtn.style.backgroundColor = "#E527B2";
        purchaseBtn.addEventListener("click", function () {

            openModal()
        })
    }


    // condition for disabling and enabling apply button 
    if (total < 200 || total === 0) {
        applyBtn.setAttribute('disabled', true);
    }
    else {
        applyBtn.removeAttribute('disabled');
        applyBtn.style.backgroundColor = '#E527B2';
        let couponInputField = document.getElementById("coupon-input");
        let discount = document.getElementById("discount");
        // ADDING EVENT LISTENER according to conditions 
        applyBtn.addEventListener('click', function () {
            let couponInputValue = couponInputField.value;
            let promoCode = document.getElementById("promo-code").innerText;
            // ckecking the promo code is correct or not 
            if (couponInputValue === promoCode) {
                discount.innerText = (total * (20 / 100)).toFixed(2);
                finalTotal.innerText = (total - parseFloat(discount.innerText)).toFixed(2);
            }
            else {
                alert('please check the coupon code again')
            }
        })
    }

}

let modal = document.getElementById('my_modal_1');

function openModal() {
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
}

function closeModal() {
    const modal = document.getElementById('my_modal_1');
    modal.close();
}

