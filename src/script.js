const wrapper = document.createElement('div');
const textArea = document.createElement('textarea');
const description = document.createElement('div');
const h1 = document.createElement('h1');
const p = document.createElement('p');
let lang = localStorage.getItem('lang');
let keyboardCase = 'lower';
document.body.appendChild(textArea);
document.body.appendChild(wrapper);
document.body.appendChild(description);
description.appendChild(h1);
description.appendChild(p);
wrapper.className = 'wrapper';
textArea.className = 'display';
description.className = 'description';
h1.innerText = "Virtual Keyboard Functionality";
p.innerText = "1) To change language on the virtual keyboard itself, click alt and then shift buttons \n" +
    "2) to change language on your keyboard press the same (alt + shift) combination \n" +
    "3) To capitalize letters – press shift on the virtual keyboard\n " +
    "4) To capitalize letters – press shift on the your keyboard\n" +
    "Keyboard was created in Mac OS, HOWEVER Windows functionality was implemented!"
const elements = [
    {ru:'ё',en: '`',secondaryRu: '', secondaryEn:'~', isControl:false},
    {ru:'1',en:'1', secondaryRu:'!', secondaryEn:'!', isControl:false},
    {ru:'2',en: '2',secondaryRu:'"',secondaryEn:'"', isControl:false},
    {ru:'3',en: '3', secondaryRu:'№', secondaryEn:'#', isControl:false},
    {ru:'4',en:'4', secondaryRu:';',secondaryEn:'$', isControl:false},
    {ru:'5',en:'5',secondaryRu:'%',secondaryEn:'%', isControl:false},
    {ru:'6',en:'6',secondaryRu:'^',secondaryEn:':', isControl:false},
    {ru:'7',en:'7',secondaryRu:'&',secondaryEn:'?', isControl:false},
    {ru:'8',en:'8',secondaryRu:'*',secondaryEn:'*', isControl:false},
    {ru:'9',en:'9',secondaryRu:'(',secondaryEn:'(', isControl:false},
    {ru:'0',en:'0',secondaryRu:')',secondaryEn:')', isControl:false},
    {ru:'-',en:'-',secondaryRu:'—',secondaryEn:'–', isControl:false},
    {ru:'=',en:'=',secondaryRu:'+',secondaryEn:'+', isControl:false},
    {ru:'Backspace',en:'Backspace',secondaryRu:'',secondaryEn:'', isControl:true, controlSymbol: 'backspace'},

    {ru:'Tab',en: 'Tab',secondaryRu: '', secondaryEn:'', isControl:true, controlSymbol:'tab'},
    {ru:'Й',en:'Q', secondaryRu:'', secondaryEn:'', isControl:false},
    {ru:'Ц',en: 'W',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'У',en: 'E', secondaryRu:'', secondaryEn:'', isControl:false},
    {ru:'К',en:'R', secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Е',en:'T',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Н',en:'Y',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Г',en:'U',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Ш',en:'I',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Щ',en:'O',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'З',en:'P',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Х',en:'[',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Ъ',en:']',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'\\',en:'\\',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'DEL',en:'DEL',secondaryRu:'',secondaryEn:'', isControl:true, controlSymbol: 'del'},

    {ru:'Caps Lock',en: 'Caps Lock',secondaryRu: '', secondaryEn:'', isControl:true, controlSymbol: 'capslock'},
    {ru:'Ф',en:'A', secondaryRu:'', secondaryEn:'', isControl:false},
    {ru:'Ы',en: 'S',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'В',en: 'D', secondaryRu:'', secondaryEn:'', isControl:false},
    {ru:'А',en:'F', secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'П',en:'G',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Р',en:'H',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'О',en:'J',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Л',en:'K',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Д',en:'L',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Ж',en:';',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Э',en:'\'',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'ENTER',en:'ENTER',secondaryRu:'',secondaryEn:'', isControl:true,controlSymbol:"enter"},

    {ru:'Shift',en: 'Shift',secondaryRu: '', secondaryEn:'', isControl:true, controlSymbol: "shift"},
    {ru:'\\',en:'\\', secondaryRu:'', secondaryEn:'', isControl:false},
    {ru:'Я',en: 'Z',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Ч',en: 'X', secondaryRu:'', secondaryEn:'', isControl:false},
    {ru:'С',en:'C', secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'М',en:'V',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'И',en:'B',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Т',en:'N',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Ь',en:'M',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Б',en:'.',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'Ю',en:',',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'/',en:'\/',secondaryRu:'',secondaryEn:'', isControl:false},
    {ru:'&#9650;',en:'&#9650;',secondaryRu:'',secondaryEn:'', isControl:true, controlSymbol: "arrowUp"},
    {ru:'Shift',en:'Shift',secondaryRu:'',secondaryEn:'', isControl:true, controlSymbol: "shift"},

    {ru:'Ctrl',en: 'Ctrl',secondaryRu: '', secondaryEn:'', isControl:true, controlSymbol: "control"},
    {ru:'Win',en:'Win', secondaryRu:'', secondaryEn:'', isControl:true, controlSymbol: "meta"},
    {ru:'Alt',en: 'Alt',secondaryRu:'',secondaryEn:'', isControl:true, controlSymbol: "alt"},
    {ru:' ',en: ' ', secondaryRu:'', secondaryEn:'', isControl:false},
    {ru:'Alt',en:'Alt', secondaryRu:'',secondaryEn:'', isControl:true, controlSymbol: "alt"},
    {ru:'Ctrl',en:'Ctrl',secondaryRu:'',secondaryEn:'', isControl:true, controlSymbol: "control"},
    {ru:'&#9668;',en:'&#9668;',secondaryRu:'',secondaryEn:'', isControl:true, controlSymbol: "arrowLeft"},
    {ru:'&#9660;',en:'&#9660;',secondaryRu:'',secondaryEn:'', isControl:true, controlSymbol: "arrowDown"},
    {ru:'&#9658;',en:'&#9658;',secondaryRu:'',secondaryEn:'', isControl:true, controlSymbol: "arrowRight"},
];
function render(lang = 'ru', type) {
    localStorage.setItem('lang', lang);
    elements.forEach((el) => {
        const key = document.createElement('div');
        let primaryKey = lang === 'ru'?el.ru:el.en;
        if(!el.isControl) {
            if(type === 'upper') {
                primaryKey = primaryKey.toUpperCase();
            } else {
                primaryKey = primaryKey.toLowerCase();
            }
        }
        key.innerHTML = `
            <span class="secondary-key">
                ${lang === 'ru'? el.secondaryRu: el.secondaryEn}
            </span>
            <span data-control = "${el.isControl? el.controlSymbol.toLowerCase().replace(" ", ""): ""}" data-content="${el.isControl? "": primaryKey.toLowerCase()}" class="primary-key">
                ${primaryKey}
            </span>
        `;
        key.className = 'key';
        if(el.isControl) {
            key.classList.add('is-control');
        }
        wrapper.appendChild(key);
    })
}
render(lang, 'lower');
let altPressed = false;
wrapper.addEventListener('click', (event) => {
    const target = event.target;
    let symbol = "";
    if(target.classList.contains('key')) {
        symbol = target.querySelector('.primary-key').getAttribute('data-content');
    }
    if(target.classList.contains('primary-key')) {
        symbol = target.getAttribute('data-content');
    }
    if(target.classList.contains('secondary-key')) {
        symbol = target.parentNode.querySelector('.primary-key').getAttribute('data-content');
    }
    symbol = keyboardCase === "lower" ? symbol.toUpperCase() : symbol.toLowerCase();
    textArea.value += symbol === ' ' ? symbol : symbol.trim();
    // add text area reset on delete
    if(target.innerHTML.trim().toLowerCase() === 'del') {
        let cursorPosition = textArea.selectionStart;
        textArea.value = textArea.value.split("").filter((el,i) => {
            return i !== textArea.selectionStart;
        }).join("");
        textArea.selectionStart = cursorPosition;
        textArea.selectionEnd = cursorPosition;
    }
    // add text area backspace functionality
    if(target.innerHTML.trim().toLowerCase() === 'backspace') {
        let cursorPosition = textArea.selectionStart;
        textArea.value = textArea.value.split("").filter((el,i) => {
            return i !== textArea.selectionStart - 1;
        }).join("");
        textArea.selectionStart = cursorPosition - 1;
        textArea.selectionEnd = cursorPosition - 1;
    }
    if(target.innerHTML.trim().toLowerCase() === 'enter') {
        textArea.value += "\r\n";
    }
    if(target.innerHTML.trim().toLowerCase() === 'alt') {
        altPressed = true;
    }
    if(target.innerHTML.trim().toLowerCase() === "shift" && !altPressed) {
        wrapper.innerHTML = "";
        keyboardCase = keyboardCase === "lower"? 'upper':'lower';
        render(lang, keyboardCase);
    }
    if(target.innerHTML.trim().toLowerCase() === 'shift' && altPressed) {
        wrapper.innerHTML = "";
        lang = lang === 'en'? 'ru' : 'en';
        render(lang, keyboardCase);
        altPressed = false;
    }
    if(target.innerHTML.trim().toLowerCase() === "tab") {
        textArea.value += "   ";
    }
    textArea.focus();
} )

wrapper.addEventListener('mousedown', (event) => {
    const target = event.target;
    if(target.classList.contains('key')){
        target.classList.add('active');
    }
    if(target.parentNode.classList.contains('key')) {
        target.parentNode.classList.add('active');
    }
})

wrapper.addEventListener('mouseup', (event) => {
    const target = event.target;
    if(target.classList.contains('key')){
        target.classList.remove('active');
    }
    if(target.parentNode.classList.contains('key')) {
        target.parentNode.classList.remove('active');
    }
})

document.addEventListener('keydown', (event) => {
    const key = event.key;
    let elements = document.querySelectorAll(`[data-content="${key.toLowerCase()}"]`);
    if(elements.length === 0) {
        elements = document.querySelectorAll(`[data-control="${key.toLowerCase()}"]`)
    }
    if(elements.length) {
        elements.forEach((el) => {
            el.parentNode.classList.add("active");
        })
    }
})
document.addEventListener('keyup', (event) => {
    const key = event.key;
    let elements = document.querySelectorAll(`[data-content="${key.toLowerCase()}"]`);
    if(elements.length === 0) {
        elements = document.querySelectorAll(`[data-control="${key.toLowerCase()}"]`)
    }
    if(elements.length) {
        elements.forEach((el) => {
            el.parentNode.classList.remove("active");
        })
    }
    //change language on alt + shift
    if(key.toLowerCase() === 'alt') {
        altPressed = true;
    }
    if(key.toLowerCase() === "shift" && !altPressed) {
        wrapper.innerHTML = "";
        keyboardCase = keyboardCase === "lower"? 'upper':'lower';
        render(lang, keyboardCase);
    }
    if(key.toLowerCase() === 'shift' && altPressed) {
        wrapper.innerHTML = "";
        lang = lang === 'en'? 'ru' : 'en';
        render(lang, keyboardCase);
        altPressed = false;
    }
});