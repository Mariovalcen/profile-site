document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.querySelector('.terminal-window');
    const header = terminal.querySelector('.terminal-header');
  
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;
  
    header.addEventListener('mousedown', (e) => {
      if (window.innerWidth <= 730) return; // No draggable en móvil
      isDragging = true;
  
      const rect = terminal.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
  
      terminal.style.transition = 'none';
      document.body.style.userSelect = 'none'; // Evita seleccionar texto al arrastrar
    });
  
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
  
      const rect = terminal.getBoundingClientRect();
      const headerHeight = 28;
      const margin = 10;
  
      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;
  
      // Limitar horizontal
      x = Math.max(0, Math.min(window.innerWidth - rect.width, x));
  
      // Limitar vertical
      y = Math.max(headerHeight + margin, Math.min(window.innerHeight - rect.height - margin, y));
  
      terminal.style.left = `${x}px`;
      terminal.style.top = `${y}px`;
    });
  
    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        document.body.style.userSelect = ''; // Restablecer selección de texto
      }
    });
  });
  