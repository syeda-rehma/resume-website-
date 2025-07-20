function toggleExtra() {
  const extra = document.getElementById('extra');
  extra.style.display = extra.style.display === 'none' ? 'block' : 'none';
}



  function showGreeting() {
    const greeting = document.getElementById('greeting');

    if (greeting.style.display === 'block') {
      greeting.style.display = 'none';
    } else {
      greeting.style.display = 'block';
      greeting.style.animation = 'fadeIn 1s ease-in';
    }
  }

