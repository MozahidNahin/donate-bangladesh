function showSectionById(id){
    document.getElementById('donation-option').classList.add('hidden');
    document.getElementById('donation-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function greenButton(id){
    document.getElementById('donation-btn').classList.remove('bg-btngreen');
    document.getElementById('history-btn').classList.remove('bg-btngreen');

    document.getElementById(id).classList.add('bg-btngreen');
}