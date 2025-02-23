function showBalloons() {
    const balloonContainer = document.getElementById('balloon-container');
    const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];
    for (let i = 0; i < 50; i++) {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      balloon.style.left = `${Math.random() * 100}vw`;
      balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.animationDelay = `${Math.random() * 5}s`;
      balloonContainer.appendChild(balloon);
    }
  }
