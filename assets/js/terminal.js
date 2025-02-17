// terminal-animation.js

const terminalLines = [
    { type: 'prompt', text: '(kali@kali)-[~/]' },
    { type: 'command', text: '$ whoami' },
    { type: 'output', text: 'mariovalcen' },
    { type: 'prompt', text: '(kali@kali)-[~/]' },
    { type: 'command', text: '$ cat about_me' },
    { type: 'output', text: `Hello! I’m Mario, a psychologist who changed from analyzing human behavior to trying to understand the mysteries of the kernel.<br>I started my way in psychology, but my curiosity for technology made me to train as a full-stack web developer...` },
    { type: 'prompt', text: '(kali@kali)-[~/]' },
    { type: 'command', text: '$ cd projects' },
    { type: 'prompt', text: '(kali@kali)-[~/projects]' },
    { type: 'command', text: '$ ls -la' },
    { type: 'output', text: `total 20<br>drwxr-xr-x  4 mario mario 4096 Feb 17 13:21 .<br>drwxr-xr-x  6 mario mario 4096 Feb 16 12:15 ..<br>-rw-r--r--  1 mario mario 4096 Feb 14 11:05 exploit.py<br>-rw-r--r--  1 mario mario 2048 Feb 14 11:06 nmap_scan.log<br><span style="color: var(--background-light);">-rwxr-xr-x  1 mario mario 4096 Feb 14 11:07 </span><a href="https://github.com/mariovalcen" style="color: var(--link-executable-color); font-weight: bold; text-decoration: none;">run_project.sh</a><br><span style="color: var(--background-light);">-rwxr-xr-x  1 mario mario 2048 Feb 15 10:30 </span><a href="https://github.com/mariovalcen" style="color: var(--link-executable-color); font-weight: bold; text-decoration: none;">reverse_shell.sh</a>` },
    { type: 'prompt', text: '(kali@kali)-[~/projects]' }
];

let index = 0;
function typeLine() {
  if (index < terminalLines.length) {
    const line = terminalLines[index];
    const terminalOutput = document.getElementById('terminal-output');
    const newLine = document.createElement('p');
    newLine.className = line.type;
    terminalOutput.appendChild(newLine);

    let charIndex = 0;
    const typeChar = () => {
      if (charIndex < line.text.length) {
        newLine.innerHTML += line.text[charIndex++];
        setTimeout(typeChar, 100);
      } else {
        index++;
        typeLine();
      }
    };

    if (line.type === 'command') {
      typeChar();
    } else {
      newLine.innerHTML = line.text;
      index++;
      typeLine();
    }
  } else {
    const terminalOutput = document.getElementById('terminal-output');
    const cursorLine = document.createElement('p');
    cursorLine.className = 'command';
    cursorLine.innerHTML = '$ <span class="cursor" style="background-color: var(--primary-color); display: inline-block; width: 10px; height: 20px; animation: blink 0.5s infinite;">█</span>';
    terminalOutput.appendChild(cursorLine);
  }
}

document.addEventListener('DOMContentLoaded', typeLine);
