function search_games() {
    let input = document.getElementById('easysearchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('games');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}