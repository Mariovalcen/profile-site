document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.querySelector('.terminal-window');
    const header = terminal.querySelector('.terminal-header');
  
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;
  
    header.addEventListener('mousedown', (e) => {
        if (window.innerWidth <= 730) return;
      
        isDragging = true;
        offsetX = e.clientX - terminal.getBoundingClientRect().left;
        offsetY = e.clientY - terminal.getBoundingClientRect().top;
      
        // Quitar centrado al empezar a mover
        terminal.style.transform = 'none';
        terminal.style.transition = 'none';
      });
  
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
  
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
  
      terminal.style.left = `${x}px`;
      terminal.style.top = `${y}px`;
    });
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  });
  