const tarjeta = document.getElementById('tarjeta');

document.getElementById('btnAzul').addEventListener('click', () => {
    tarjeta.style.backgroundColor = 'blue';
});

document.getElementById('btnVerde').addEventListener('click', () => {
    tarjeta.style.backgroundColor = 'green';
});

document.getElementById('btnRojo').addEventListener('click', () => {
    tarjeta.style.backgroundColor = 'red';
});

document.getElementById('btnReset').addEventListener('click', () => {
    tarjeta.style.backgroundColor = 'white';
});