// Noakhali donation
document.getElementById('noakhali-donate').addEventListener('click',function(event){
    event.preventDefault();
    
    const donateMoney = getInputFieldValueById('noakhali-input');
    const donation = getTextFieldValueById('noakhali-donation-balance');
    const totalMoney = getTextFieldValueById('account-balance');

    if(donateMoney > 0 && totalMoney >= donateMoney){
        const donationBalance = donation + donateMoney;
    document.getElementById('noakhali-donation-balance').innerText = donationBalance;

    const donatedMoney = totalMoney - donateMoney;
    document.getElementById('account-balance').innerText = donatedMoney;

    const div = document.createElement('div');
    div.innerHTML = `<div class="border px-5 py-5 rounded-lg bg-white shadow-md space-y-2">
                    <p class="text-xl font-semibold text-start">${donateMoney} Taka is Donated for Flood Rescue at Noakhali, Bangladesh</p>
                    <p class="text-md text-start">${new Date().toDateString()}, ${new Date().toTimeString()}</p>
                </div>`

    document.getElementById('history-container').appendChild(div); 
    
        const popUpMenu = document.getElementById('pop-up');
        popUpMenu.classList.remove('hidden');

        document.getElementById('close-popup').addEventListener('click', function(){
            popUpMenu.classList.add('hidden');
        });

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

    if(donateMoney > 0 && totalMoney >= donateMoney){
        const donationBalance = donation + donateMoney;
    document.getElementById('feni-donation-balance').innerText = donationBalance;

    const donatedMoney = totalMoney - donateMoney;
    document.getElementById('account-balance').innerText = donatedMoney;

    const div = document.createElement('div');
    div.innerHTML = `<div class="border px-5 py-5 rounded-lg bg-white shadow-md space-y-2">
                    <p class="text-xl font-semibold text-start">${donateMoney} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
                    <p class="text-md text-start">${new Date().toDateString()}, ${new Date().toTimeString()}</p>
                </div>`

    document.getElementById('history-container').appendChild(div); 

        const popUpMenu = document.getElementById('pop-up');
        popUpMenu.classList.remove('hidden');

        document.getElementById('close-popup').addEventListener('click', function(){
            popUpMenu.classList.add('hidden');
        });

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

    if(donateMoney > 0 && totalMoney >= donateMoney){
        const donationBalance = donation + donateMoney;
    document.getElementById('quota-donation-balance').innerText = donationBalance;

    const donatedMoney = totalMoney - donateMoney;
    document.getElementById('account-balance').innerText = donatedMoney;

    const div = document.createElement('div');
    div.innerHTML = `<div class="border px-5 py-5 rounded-lg bg-white shadow-md space-y-2">
                    <p class="text-xl font-semibold text-start">${donateMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
                    <p class="text-md text-start">${new Date().toDateString()}, ${new Date().toTimeString()}</p>
                </div>`

    document.getElementById('history-container').appendChild(div); 

        const popUpMenu = document.getElementById('pop-up');
        popUpMenu.classList.remove('hidden');

        document.getElementById('close-popup').addEventListener('click', function(){
            popUpMenu.classList.add('hidden');
        });

    }
    else{
        alert('Failed donation!')
    }
})