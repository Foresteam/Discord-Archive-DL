try { document.querySelector('#copirovalka').remove(); } catch { }
var copirovalka = document.createElement('input');
copirovalka.setAttribute('id', 'copirovalka');
copirovalka.type = 'text';
document.body.appendChild(copirovalka);

let msgId = '934793791121031240';
copirovalka.value = 'wget ' +
    Array.prototype.slice.call(document.querySelector(`#message-accessories-${msgId}`).children)
        .map(v => v.querySelector('a').getAttribute('href'))
        .map(v => `"${v}"`)
        .join(' ');
copirovalka.focus();
copirovalka.select();
document.execCommand('copy');
alert('Copied!');