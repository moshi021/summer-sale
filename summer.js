
const cartContainer=document.getElementById("cartContainer")
var count=1
var totalPrice=document.getElementById("total-price")
const makePurchaseBtn=document.getElementById("make-purchase-btn")
const applyBtn=document.getElementById("applybtn")
const discountCodeInput = document.getElementById("input");
const homeButton=document.getElementById("homebtn")

accessoryName("card1","name1", "price1",cartContainer)
accessoryName("card2","name2", "price2",cartContainer)
accessoryName("card3","name3", "price3",cartContainer)
accessoryName("card4","name4", "price4",cartContainer)
accessoryName("card5","name5", "price5",cartContainer)
accessoryName("card6","name6", "price6",cartContainer)

// // tapping on the card will display its name on cart list and update total price
function accessoryName(cardNo,cardName,cardPrice, cartContainer) {
    const number=document.getElementById(cardNo)
    const name=document.getElementById(cardName).innerText
    const price=document.getElementById(cardPrice).innerText
    number.addEventListener('click',function(event){
        const p=document.createElement('p')
        p.innerText=count+". "+name +" "+ price +" TK."
        cartContainer.appendChild(p)
        count++;    
        totalPrice.innerText=parseFloat(totalPrice.innerText)+parseFloat(price)
        updatePurchaseBtn(totalPrice);
        updateApplyBtn(totalPrice);
        
    })

}

function updatePurchaseBtn(totalPrice) {
    
    if (parseFloat(totalPrice.innerText)> 0) {
        makePurchaseBtn.removeAttribute('disabled');
    } else {
        makePurchaseBtn.setAttribute('disabled', true);
    }
}

function updateApplyBtn(totalPrice){
    const inputValue=document.getElementById("input").value
    if (parseFloat(totalPrice.innerText)>=200 && inputValue==="SELL200" ) {
        applyBtn.removeAttribute('disabled');
    } else {
        applyBtn.setAttribute('disabled', true);
    }
}

discountCodeInput.addEventListener('input', function(event) {
    updateApplyBtn(totalPrice);
});
 
// calculte the 20% of the totalPrice and update Total
applyBtn.addEventListener('click',function(event){
    var discount=document.getElementById("discount")
    discount.innerText=parseFloat(totalPrice.innerText) *20/100
    var total=document.getElementById("total")
    total.innerText=totalPrice.innerText-discount.innerText
})


homeButton.addEventListener('click', function(event){
    window.location.href = "index.html";
})