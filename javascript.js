let total=0.00;
let discount=0.00;
let couponEntered=0;
let tempPrice=0.00;
function clickCard(data)
{
    const item = data.childNodes[1].childNodes[3].childNodes[3].innerText;
    console.log(item);
    const itemConteiner = document.getElementById("selected-items"); 
    const li = document.createElement("li");
    li.textContent = item;
    console.log(li);
    itemConteiner.appendChild(li);

    const price=data.childNodes[1].childNodes[3].childNodes[5].innerText.split(" ")[0];
    
    tempPrice = parseFloat(tempPrice)+ parseFloat(price);

    document.getElementById("tempPrice").innerText=parseFloat(tempPrice);
    if(couponEntered==0)
    {
        document.getElementById("total").innerText=parseFloat(tempPrice);
    }
    if(tempPrice>=200 && couponEntered==0)
    {
        document.getElementById("couponBtn").removeAttribute('disabled');
    }

}

function clickCoupon(data)
{
    const text= document.getElementById("couponText").value;
    if(text=="SELL200" && couponEntered==0)
    {
        couponEntered=parseInt(1);
        total=parseFloat(tempPrice)*.8;
        discount=parseFloat(tempPrice)*.2;
        document.getElementById("total").innerText=parseFloat(total);
        document.getElementById("couponBtn").disabled=true;
    }
    else
    {
        total=parseFloat(tempPrice);
    }
    document.getElementById("couponText").value="";
    document.getElementById("total").innerText=parseFloat(total);
    document.getElementById("discount").innerText=parseFloat(discount);
}

function reload(data)
{
    location.reload();
}
