const change1 = document.getElementById("change1")

function change1_data() {

    if (document.getElementsByTagName('div')[3].innerText === 'Anastassiya') {
        document.getElementsByTagName('div')[3].innerText = 'Анастасия'
        return;
    }

    if (document.getElementsByTagName('div')[3].innerText === 'Анастасия') {
        document.getElementsByTagName('div')[3].innerText = 'Anastassiya'
    }

}
change1.addEventListener("click", change1_data)