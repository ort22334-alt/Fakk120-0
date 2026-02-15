
const games = [
  {
    title: "The Witcher 3",
    image: "https://example.com/witcher3.jpg",
    description: "Эпическая RPG с открытым миром.",
    minRequirements: "Win 7, i5-2500, 6 ГБ ОЗУ, GTX 660",
    recommendedRequirements: "Win 10, i7-3770, 8 ГБ ОЗУ, GTX 1060",
    rating: 9.5,
    downloadLink: "https://store.steampowered.com/app/292030",
    trailerLink: "https://youtube.com/watch?v=..."
  },
  // ...другие игры
];

// Функция переключения темы
function toggleTheme() {
  const body = document.body;
  const toggleBtn = document.getElementById('theme-toggle');

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    toggleBtn.textContent = 'Ночной режим';
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    toggleBtn.textContent = 'Дневной режим';
  }
}

// Вешаем обработчик на кнопку
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Функция для генерации карточек (как в предыдущем примере)
function renderGames(filteredGames = games) {
  const gameList = document.getElementById('game-list');
  gameList.innerHTML = '';

  filteredGames.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';

    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <div class="game-content">
        <h2 class="game-title">${game.title}</h2>
        <p>${game.description}</p>
        <p><strong>Минимум:</strong> ${game.minRequirements}</p>
        <p><strong>Рекомендовано:</strong> ${game.recommendedRequirements}</p>
        <p class="