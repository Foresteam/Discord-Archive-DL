let msgId = '934793791121031240';
console.log(
    'wget ' +
    Array.prototype.slice.call(document.querySelector(`#message-accessories-${msgId}`).children)
        .map(v => v.querySelector('a').getAttribute('href'))
        .map(v => `"${v}"`)
        .join(' ')
);