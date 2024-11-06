const change = document.getElementById("change")

function change_data() {

    if (document.getElementsByTagName('div')[2].innerText === 'Kulakova') {
        document.getElementsByTagName('div')[2].innerText = 'Кулакова'
        return;
    }

    if (document.getElementsByTagName('div')[2].innerText === 'Кулакова') {
        document.getElementsByTagName('div')[2].innerText = 'Kulakova'
    }


}
change.addEventListener("click", change_data)