document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.querySelector('.terminal-window');
    const header = terminal.querySelector('.terminal-header');
  
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;
  
    header.addEventListener('mousedown', (e) => {
      if (window.innerWidth <= 730) return;
  
      const rect = terminal.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
  
      isDragging = true;
  
      terminal.style.transition = 'none';
    });
  
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
  
      const maxX = window.innerWidth - terminal.offsetWidth;
      const maxY = window.innerHeight - terminal.offsetHeight;
  
      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;
  
      x = Math.max(0, Math.min(x, maxX));
      y = Math.max(0, Math.min(y, maxY));
  
      terminal.style.left = `${x}px`;
      terminal.style.top = `${y}px`;
    });
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  });
  