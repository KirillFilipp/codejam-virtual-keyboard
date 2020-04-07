
const inputText = document.createElement('div');
inputText.classList.add('input-text');

const keyboardInput = document.createElement('input');
keyboardInput.type = 'text';
keyboardInput.autofocus = false;
keyboardInput.placeholder = 'Input your text...';

let caps = 0;

inputText.append(keyboardInput);
document.body.prepend(inputText);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';

const additionaInfo = document.createElement('div');
const info = document.createElement('p');
info.innerHTML = 'Windows OS (Alt+Shift)';
additionaInfo.append(info);

const keysEns = [{ key: '`', code: '192' },
  { key: '1', code: '49' },
  { key: '2', code: '50' },
  { key: '3', code: '51' },
  { key: '4', code: '52' },
  { key: '5', code: '53' },
  { key: '6', code: '54' },
  { key: '7', code: '55' },
  { key: '8', code: '56' },
  { key: '9', code: '57' },
  { key: '0', code: '48' },
  { key: '-', code: '189' },
  { key: '=', code: '187' },
  { key: 'Backspace', code: '8' },
  { key: 'Tab', code: '9' },
  { key: 'Q', code: '81' },
  { key: 'W', code: '87' },
  { key: 'E', code: '69' },
  { key: 'R', code: '82' },
  { key: 'T', code: '84' },
  { key: 'Y', code: '89' },
  { key: 'U', code: '85' },
  { key: 'I', code: '73' },
  { key: 'O', code: '79' },
  { key: 'P', code: '80' },
  { key: '[', code: '219' },
  { key: ']', code: '221' },
  { key: '\\', code: '220' },
  { key: 'CapsLock', code: '20' },
  { key: 'A', code: '65' },
  { key: 'S', code: '83' },
  { key: 'D', code: '68' },
  { key: 'F', code: '70' },
  { key: 'G', code: '71' },
  { key: 'H', code: '72' },
  { key: 'J', code: '74' },
  { key: 'K', code: '75' },
  { key: 'L', code: '76' },
  { key: ';', code: '186' },
  { key: '\'', code: '222' },
  { key: 'Enter', code: '13' },
  { key: 'Shift', code: '16' },
  { key: 'Shift', code: '16' },
  { key: 'Control', code: '17' },
  { key: 'Alt', code: '18' },
  { key: 'Z', code: '90' },
  { key: 'X', code: '88' },
  { key: 'C', code: '67' },
  { key: 'V', code: '86' },
  { key: 'B', code: '66' },
  { key: 'N', code: '78' },
  { key: 'M', code: '77' },
  { key: ',', code: '188' },
  { key: '.', code: '190' },
  { key: '/', code: '191' },
  { key: 'Alt', code: '18' },
  { key: 'Control', code: '17' }];

const keysRus = [
  { key: 'Ё', code: '192' },
  { key: '1', code: '49' },
  { key: '2', code: '50' },
  { key: '3', code: '51' },
  { key: '4', code: '52' },
  { key: '5', code: '53' },
  { key: '6', code: '54' },
  { key: '7', code: '55' },
  { key: '8', code: '56' },
  { key: '9', code: '57' },
  { key: '0', code: '48' },
  { key: '-', code: '189' },
  { key: '=', code: '187' },
  { key: 'Backspace', code: '8' },
  { key: 'Tab', code: '9' },
  { key: 'Й', code: '81' },
  { key: 'Ц', code: '87' },
  { key: 'У', code: '69' },
  { key: 'К', code: '82' },
  { key: 'Е', code: '84' },
  { key: 'Н', code: '89' },
  { key: 'Г', code: '85' },
  { key: 'Ш', code: '73' },
  { key: 'Щ', code: '79' },
  { key: 'З', code: '80' },
  { key: 'Х', code: '219' },
  { key: 'Ъ', code: '221' },
  { key: '\\', code: '220' },
  { key: 'CapsLock', code: '20' },
  { key: 'Ф', code: '65' },
  { key: 'Ы', code: '83' },
  { key: 'В', code: '68' },
  { key: 'А', code: '70' },
  { key: 'П', code: '71' },
  { key: 'Р', code: '72' },
  { key: 'О', code: '74' },
  { key: 'Л', code: '75' },
  { key: 'Д', code: '76' },
  { key: 'Ж', code: '186' },
  { key: 'Э', code: '222' },
  { key: 'Enter', code: '13' },
  { key: 'Shift', code: '16' },
  { key: 'Shift', code: '16' },
  { key: 'Control', code: '17' },
  { key: 'Alt', code: '18' },
  { key: 'Я', code: '90' },
  { key: 'Ч', code: '88' },
  { key: 'С', code: '67' },
  { key: 'М', code: '86' },
  { key: 'И', code: '66' },
  { key: 'Т', code: '78' },
  { key: 'Ь', code: '77' },
  { key: 'Б', code: '188' },
  { key: 'Ю', code: '190' },
  { key: '.', code: '191' },
  { key: 'Alt', code: '18' },
  { key: 'Control', code: '17' }];

function buttonRend(value) {
  if (caps === 0) {
    return `<button data-code=${value.code}>${value.key.toLowerCase()}</button>`;
  }
  return `<button data-code=${value.code}>${value.key}</button>`;
}

let keyboardRendValue;

function keyBoardRend() {
  if (window.localStorage.lang === 'En') {
    keyboardRendValue = keysEns.reduce((acc, value) => acc + buttonRend(value), '');
  } else {
    keyboardRendValue = keysRus.reduce((acc, value) => acc + buttonRend(value), '');
  }
  return keyboardRendValue;
}

function changeLang(Lang, ...codes) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.keyCode);
    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) {
        return;
      }
    }
    pressed.clear();
    Lang();
    keyBoardRend();
    keyboard.innerHTML = keyboardRendValue;
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.keyCode);
  });
}

function setLang() {
  if (window.localStorage.lang === 'En') {
    window.localStorage.lang = 'Ru';
  } else {
    window.localStorage.lang = 'En';
  }
}

changeLang(setLang, 18, 16);

keyBoardRend();
keyboard.innerHTML = keyboardRendValue;
document.body.append(keyboard);
document.body.append(additionaInfo);

function addKeySymbol(event) {
  const buttonsNode = keyboard.querySelectorAll('button');
  const buttons = [...buttonsNode];
  const buttonsIndex = buttons.findIndex((item) => item.dataset.code === event.keyCode.toString());
  if (keyboardInput.focus === true) {
    keyboardInput.focus = true;
  } else {
    switch (event.key) {
      case 'Backspace':
        keyboardInput.value = keyboardInput.value.slice(0, -1);
        break;
      case 'CapsLock':
        if (caps === 0) {
          buttons[buttonsIndex].classList.add('pressed');
          caps += 1;
          keyBoardRend();
          keyboard.innerHTML = keyboardRendValue;
          break;
        } else {
          buttons[buttonsIndex].classList.remove('pressed');
          caps -= 1;
          keyBoardRend();
          keyboard.innerHTML = keyboardRendValue;
          break;
        }
      case 'Enter':

        break;
      case 'Tab':

        break;
      case 'Shift':

        break;
      case 'alt':

        break;
      case 'control':

        break;
      case ' ':
        keyboardInput.value = keyboardInput.value.concat(' ');
        break;
      default:
        keyboardInput.value += buttons[buttonsIndex].innerText;
        break;
    }
  }
}

function addClickSymbol(event) {
  const button = event.target.dataset.code.toString();
  const buttonsNode = keyboard.querySelectorAll('button');
  const buttons = [...buttonsNode];
  const buttonsIndex = buttons.findIndex((item) => item.dataset.code === button);
  if (keyboardInput.focus === true) {
    keyboardInput.focus = true;
  } else {
    switch (button) {
      case 'Backspace':
        keyboardInput.value = keyboardInput.value.slice(0, -1);
        break;
      case 'CapsLock':
        if (caps === 0) {
          buttons[buttonsIndex].classList.add('pressed');
          caps += 1;
          keyBoardRend();
          keyboard.innerHTML = keyboardRendValue;
          break;
        } else {
          buttons[buttonsIndex].classList.remove('pressed');
          caps -= 1;
          keyBoardRend();
          keyboard.innerHTML = keyboardRendValue;
          break;
        }
      case 'Enter':

        break;
      case 'Tab':

        break;
      case 'Shift':

        break;
      case 'alt':

        break;
      case 'control':

        break;
      case ' ':
        keyboardInput.value = keyboardInput.value.concat(' ');
        break;
      default:
        keyboardInput.value += buttons[buttonsIndex].innerText;
        break;
    }
  }
}

keyboard.addEventListener('mouseup', addClickSymbol);
window.addEventListener('keydown', addKeySymbol);
