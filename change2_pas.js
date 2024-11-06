const change2 = document.getElementById("change2")

function change2_data() {

    document.getElementsByTagName('div')[3].innerText = 'Анастасия'
    document.getElementsByTagName('div')[2].innerText = 'Кулакова'
}
change2.addEventListener("click", change2_data)