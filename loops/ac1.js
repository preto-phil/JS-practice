//// Launch Countdown

const output = document.querySelector('.output');

for (let i = 10; i >= 0; i--) {
    if (i === 10) {
        const para = document.createElement('p');
        output.appendChild(para);
        para.textContent = `Countdown ${i}`;
    } else if (i < 10 && i > 0) {
        const para = document.createElement('p');
        output.appendChild(para);
        para.textContent = `${i}`;
    } else {
        const para = document.createElement('p');
        output.appendChild(para);
        para.textContent = 'Blast off!';
    }
}