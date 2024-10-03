const textId = document.getElementById('text')
const btnId = document.getElementById('btn')

 btnId.addEventListener('click', () => {
  setTimeout(() => {
    textId.textContent = 'ボタンをクリックしました'
  }, 2000);
});

