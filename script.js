function calculateMaturityAmount()
{
    //Getting inputs from the elements
    const principle=parseFloat(document.getElementById('principal').value);
    const intersRate=parseFloat(document.getElementById('interestrate').value);
    const tenure=parseFloat(document.getElementById('tenure').value);
   //Perform the calculation
   const maturityAmount = principle + (principle*intersRate*tenure)/100;
   //Display the Result
   document.getElementById('result').innerText= `Maturity Amount : ${maturityAmount.toFixed(2)}`;
}    
//Attach the event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);