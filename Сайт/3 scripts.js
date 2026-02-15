let games = [];

function loadGames() {
    const saved = localStorage.getItem('games');
    if (saved) {
        games = JSON.parse(saved);
    }
    renderGames();
}

function saveGames() {
    localStorage.setItem('games', JSON.stringify(games));
}

function renderGames(filteredGames = games) {
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = '';


    filteredGames.forEach(game => {
        const card = document.createElement('div