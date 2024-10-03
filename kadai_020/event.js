const textId = document.getElementById('text')
const btnId = document.getElementById('btn')

 btnId.addEventListener('click', () => {
  textId.textContent = 'ボタンをクリックしました'
});

