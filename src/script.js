const wrapper = document.createElement('div');
const textArea = document.createElement('textarea');
document.body.appendChild(textArea);
document.body.appendChild(wrapper);
wrapper.className = 'wrapper';
textArea.className = 'display';
const elements = [
    {ru:'ё',en: '`',secondaryRu: '', secondaryEn:'~'},
    {ru:'1',en:'1', secondaryRu:'!', secondaryEn:'!'},
    {ru:'2',en: '2',secondaryRu:'"',secondaryEn:'"'},
    {ru:'3',en: '3', secondaryRu:'№', secondaryEn:'#'},
    {ru:'4',en:'4', secondaryRu:';',secondaryEn:'$'},
    {ru:'5',en:'5',secondaryRu:'%',secondaryEn:'%'},
    {ru:'6',en:'6',secondaryRu:'^',secondaryEn:':'},
    {ru:'7',en:'7',secondaryRu:'&',secondaryEn:'?'},
    {ru:'8',en:'8',secondaryRu:'*',secondaryEn:'*'},
    {ru:'9',en:'9',secondaryRu:'(',secondaryEn:'('},
    {ru:'0',en:'0',secondaryRu:')',secondaryEn:')'},
    {ru:'-',en:'-',secondaryRu:'—',secondaryEn:'–'},
    {ru:'=',en:'=',secondaryRu:'+',secondaryEn:'+'},
    {ru:'Backspace',en:'Backspace',secondaryRu:'',secondaryEn:''},

    {ru:'Tab',en: 'Tab',secondaryRu: '', secondaryEn:''},
    {ru:'Й',en:'Q', secondaryRu:'', secondaryEn:''},
    {ru:'Ц',en: 'W',secondaryRu:'',secondaryEn:''},
    {ru:'У',en: 'E', secondaryRu:'', secondaryEn:''},
    {ru:'К',en:'R', secondaryRu:'',secondaryEn:''},
    {ru:'Е',en:'T',secondaryRu:'',secondaryEn:''},
    {ru:'Н',en:'Y',secondaryRu:'',secondaryEn:''},
    {ru:'Г',en:'U',secondaryRu:'',secondaryEn:''},
    {ru:'Ш',en:'I',secondaryRu:'',secondaryEn:''},
    {ru:'Щ',en:'O',secondaryRu:'',secondaryEn:''},
    {ru:'З',en:'P',secondaryRu:'',secondaryEn:''},
    {ru:'Х',en:'[',secondaryRu:'',secondaryEn:''},
    {ru:'Ъ',en:']',secondaryRu:'',secondaryEn:''},
    {ru:'\\',en:'\\',secondaryRu:'',secondaryEn:''},
    {ru:'DEL',en:'DEL',secondaryRu:'',secondaryEn:''},

    {ru:'Caps Lock',en: 'Caps Lock',secondaryRu: '', secondaryEn:''},
    {ru:'Ф',en:'A', secondaryRu:'', secondaryEn:''},
    {ru:'Ы',en: 'S',secondaryRu:'',secondaryEn:''},
    {ru:'В',en: 'D', secondaryRu:'', secondaryEn:''},
    {ru:'А',en:'F', secondaryRu:'',secondaryEn:''},
    {ru:'П',en:'G',secondaryRu:'',secondaryEn:''},
    {ru:'Р',en:'H',secondaryRu:'',secondaryEn:''},
    {ru:'О',en:'J',secondaryRu:'',secondaryEn:''},
    {ru:'Л',en:'K',secondaryRu:'',secondaryEn:''},
    {ru:'Д',en:'L',secondaryRu:'',secondaryEn:''},
    {ru:'Ж',en:';',secondaryRu:'',secondaryEn:''},
    {ru:'Э',en:'\'',secondaryRu:'',secondaryEn:''},
    {ru:'ENTER',en:'ENTER',secondaryRu:'',secondaryEn:''},

    {ru:'Shift',en: 'Shift',secondaryRu: '', secondaryEn:''},
    {ru:'\\',en:'\\', secondaryRu:'', secondaryEn:''},
    {ru:'Я',en: 'Z',secondaryRu:'',secondaryEn:''},
    {ru:'Ч',en: 'X', secondaryRu:'', secondaryEn:''},
    {ru:'С',en:'C', secondaryRu:'',secondaryEn:''},
    {ru:'М',en:'V',secondaryRu:'',secondaryEn:''},
    {ru:'И',en:'B',secondaryRu:'',secondaryEn:''},
    {ru:'Т',en:'N',secondaryRu:'',secondaryEn:''},
    {ru:'Ь',en:'M',secondaryRu:'',secondaryEn:''},
    {ru:'Б',en:'.',secondaryRu:'',secondaryEn:''},
    {ru:'Ю',en:',',secondaryRu:'',secondaryEn:''},
    {ru:'/',en:'\/',secondaryRu:'',secondaryEn:''},
    {ru:'&#9650;',en:'&#9650;',secondaryRu:'',secondaryEn:''},
    {ru:'Shift',en:'Shift',secondaryRu:'',secondaryEn:''},

    {ru:'Ctrl',en: 'Ctrl',secondaryRu: '', secondaryEn:''},
    {ru:'Win',en:'Win', secondaryRu:'', secondaryEn:''},
    {ru:'Alt',en: 'Alt',secondaryRu:'',secondaryEn:''},
    {ru:'',en: '', secondaryRu:'', secondaryEn:''},
    {ru:'Alt',en:'Alt', secondaryRu:'',secondaryEn:''},
    {ru:'Ctrl',en:'Ctrl',secondaryRu:'',secondaryEn:''},
    {ru:'&#9668;',en:'&#9668;',secondaryRu:'',secondaryEn:''},
    {ru:'&#9660;',en:'&#9660;',secondaryRu:'',secondaryEn:''},
    {ru:'&#9658;',en:'&#9658;',secondaryRu:'',secondaryEn:''},
];
function render(lang = 'ru') {
    elements.forEach((el) => {
        const key = document.createElement('div');
        key.innerHTML = `
            <span class="secondary-key">
                ${lang === 'ru'? el.secondaryRu: el.secondaryEn}
            </span>
            <span class="primary-key">
                ${lang === 'ru'?el.ru:el.en}
            </span>
        `;
        key.className = 'key';
        wrapper.appendChild(key);
    })
}
render();