// Noakhali donation
document.getElementById('noakhali-donate').addEventListener('click',function(event){
    event.preventDefault();
    
    const donateMoney = getInputFieldValueById('noakhali-input');
    const donation = getTextFieldValueById('noakhali-donation-balance');
    const totalMoney = getTextFieldValueById('account-balance');

    if(donateMoney > 0){
        const donationBalance = donation + donateMoney;
    document.getElementById('noakhali-donation-balance').innerText = donationBalance;

    const donatedMoney = totalMoney - donateMoney;
    document.getElementById('account-balance').innerText = donatedMoney;
    }
    else{
        alert('Failed donation!')
    }
})

// Feni donation
document.getElementById('feni-donate').addEventListener('click',function(event){
    event.preventDefault();

    const donateMoney = getInputFieldValueById('feni-input');
    const donation = getTextFieldValueById('feni-donation-balance');
    const totalMoney = getTextFieldValueById('account-balance');

    if(donateMoney > 0){
        const donationBalance = donation + donateMoney;
    document.getElementById('feni-donation-balance').innerText = donationBalance;

    const donatedMoney = totalMoney - donateMoney;
    document.getElementById('account-balance').innerText = donatedMoney;
    }
    else{
        alert('Failed donation!')
    }
})

// Quota donation
document.getElementById('quota-donate').addEventListener('click',function(event){
    event.preventDefault();

    const donateMoney = getInputFieldValueById('quota-input');
    const donation = getTextFieldValueById('quota-donation-balance');
    const totalMoney = getTextFieldValueById('account-balance');

    if(donateMoney > 0){
        const donationBalance = donation + donateMoney;
    document.getElementById('quota-donation-balance').innerText = donationBalance;

    const donatedMoney = totalMoney - donateMoney;
    document.getElementById('account-balance').innerText = donatedMoney;
    }
    else{
        alert('Failed donation!')
    }
})