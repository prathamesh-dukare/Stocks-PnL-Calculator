// Globle Variables
const buyPrice = document.querySelector("#buy-price");
const buyQuantity = document.querySelector("#buy-quantity");
const sellPrice = document.querySelector("#sell-price");
let pnlStatus;
const checkPnLBtn = document.querySelector("#check-pnl-btn");
const messageDiv = document.querySelector("#message-div");

// Helper Functions

function checkProfitOrLoss(buyPrice, sellPrice) {
    if (sellPrice > buyPrice) {
        return 2
    } else if (sellPrice == buyPrice) {
        return 1
    } else { return 0 }
}
function calculateProfitOrLoss(buyPrice, buyQuantity, sellPrice) {
    if (pnlStatus === 2) {
        // console.log("PRofit")
        let profit = ((sellPrice - buyPrice) * buyQuantity).toFixed(2);
        let returns = (((sellPrice - buyPrice) / buyPrice) * 100).toFixed(2);
        return [profit, returns]
    } else if (pnlStatus === 1) {
        // console.log("No change")
        let profit = ((sellPrice - buyPrice) * buyQuantity).toFixed(2);
        let returns = (((sellPrice - buyPrice) / buyPrice) * 100).toFixed(2);
        return [profit, returns]
    } else {
        // console.log("Loss")
        let loss = ((buyPrice - sellPrice) * buyQuantity).toFixed(2);
        let returns = (((buyPrice - sellPrice) / buyPrice) * 100).toFixed(2);
        return [loss, returns]
    }
}
function updateMessage(pnlStatus,change,returns){
    if(pnlStatus === 2){
        messageDiv.innerText = `Wow, You are in a Profit of ${change} with ${returns}% returns`;
        messageDiv.style.color = "#73e36d";
    }else if(pnlStatus === 1){
        messageDiv.style.color = "#25d6df";
        messageDiv.innerText = `🤷‍♂️ No Gain No Pain`;
    }else{
        messageDiv.style.color = "red";
        messageDiv.innerText = `ohh No, You are in a Loss of ${change} with -${returns}% returns`;
    }
}
checkPnLBtn.addEventListener("click", function checkPnlHandler() {
    pnlStatus = checkProfitOrLoss(Number(buyPrice.value), Number(sellPrice.value));
    let profitOrLoss = calculateProfitOrLoss(Number(buyPrice.value), Number(buyQuantity.value), Number(sellPrice.value));
    updateMessage(pnlStatus,profitOrLoss[0],profitOrLoss[1])

})