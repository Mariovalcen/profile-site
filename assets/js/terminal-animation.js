
document.addEventListener('DOMContentLoaded', () => {
  const terminalOutput = document.getElementById('terminal-output');
  if (!terminalOutput) return;

  terminalOutput.innerHTML = '';

  const terminalLines = [
    { type: 'prompt-line', text: '(kali@kali)-[~/]' },
    { type: 'command', text: '$ whoami' },
    { type: 'output', text: 'mariovalcen' },
    { type: 'prompt-line', text: '(kali@kali)-[~/]' },
    { type: 'command', text: '$ cat about_me' },
    { type: 'output', text: `Hello! I’m Mario, a psychologist who changed from analyzing human behavior to trying to understand the mysteries of the kernel.<br>I started my way in psychology, but my curiosity for technology made me to train as a full-stack web developer...` },
    { type: 'prompt-line', text: '(kali@kali)-[~/]' },
    { type: 'command', text: '$ cd projects' },
    { type: 'prompt-line', text: '(kali@kali)-[~/projects]' },
    { type: 'command', text: '$ ls -la' },
    { type: 'output', text: `total 20<br>drwxr-xr-x  4 mario mario 4096 Feb 17 13:21 .<br>drwxr-xr-x  6 mario mario 4096 Feb 16 12:15 ..<br>-rw-r--r--  1 mario mario 4096 Feb 14 11:05 exploit.py<br>-rw-r--r--  1 mario mario 2048 Feb 14 11:06 nmap_scan.log<br><span style="color: var(--background-light);">-rwxr-xr-x  1 mario mario 4096 Feb 14 11:07 </span><a href="https://github.com/mariovalcen" style="color: var(--link-executable-color); font-weight: bold; text-decoration: none;">run_project.sh</a><br><span style="color: var(--background-light);">-rwxr-xr-x  1 mario mario 2048 Feb 15 10:30 </span><a href="https://github.com/mariovalcen" style="color: var(--link-executable-color); font-weight: bold; text-decoration: none;">reverse_shell.sh</a>` }
  ];

  let index = 0;
  function typeLine() {
    if (index >= terminalLines.length) {
      const finalCursor = document.createElement('p');
      finalCursor.innerHTML = '$ <span class="cursor" style="background-color: var(--primary-color); display: inline-block; width: 10px; height: 20px; animation: blink 0.5s infinite;">█</span>';
      terminalOutput.appendChild(finalCursor);
      terminalOutput.scrollIntoView({ behavior: 'smooth', block: 'end' });
      return;
    }

    const line = terminalLines[index];
    const newLine = document.createElement('p');
    newLine.className = line.type;
    terminalOutput.appendChild(newLine);

    if (line.type === 'command') {
      let charIndex = 0;
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      cursor.style = 'background-color: var(--primary-color); display: inline-block; width: 10px; height: 20px; animation: blink 0.5s infinite;';
      newLine.appendChild(cursor);

      const animateTyping = () => {
        if (charIndex < line.text.length) {
          newLine.insertBefore(document.createTextNode(line.text[charIndex++]), cursor);
          terminalOutput.scrollIntoView({ behavior: 'smooth', block: 'end' });
          setTimeout(animateTyping, 100);
        } else {
          newLine.removeChild(cursor);
          index++;
          typeLine();
        }
      };
      animateTyping();
    } else {
      newLine.innerHTML = line.text;
      terminalOutput.scrollIntoView({ behavior: 'smooth', block: 'end' });
      index++;
      typeLine();
    }
  }

  typeLine();
});
