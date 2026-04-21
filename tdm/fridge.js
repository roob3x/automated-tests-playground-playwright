const crypto = require('crypto');

// Gerador de nome
function geradorNome() {
    const firstNames = ['Alice', 'Roberto', 'Severino', 'Daniel', 'Pamela', 'Fernanda', 'Francisco', 'Giovanna', 'Filipinho', 'Giulia'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miler', 'Garcia', 'Martinez'];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${firstName} ${lastName}`;
}

// Gerador de float com limite
function geradorFloatComLimite() {
    return Number((Math.random() * 6).toFixed(2));
}

// Gerador de telefone dinâmico
function geradorTelefoneDinamico() {
    const ddd = Math.floor(Math.random() * (99 - 11 + 1)) + 11;
    const parte1 = Math.floor(Math.random() * (9999 - 9000 + 1)) + 9000;
    const parte2 = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    return `+55${ddd}9${parte1}-${parte2}`;
}

// Gerador de UUID
function geradorUUID() {
    return crypto.randomUUID();
}

// Gerador de string aleatória
function geradorStringAleatoria(minLength = 3, maxLength = 5) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

    let name = '';
    for (let i = 0; i < length; i++) {
        name += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return `AUTOMACAO_${name}`;
}

// Gerador de email
function geradorEmail() {
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'oulook.com', 'example.com', 'test.com'];
    const domain = domains[Math.floor(Math.random() * domains.length)];

    return `${geradorStringAleatoria()}@${domain}`;
}

module.exports = {
    geradorNome,
    geradorFloatComLimite,
    geradorTelefoneDinamico,
    geradorUUID,
    geradorStringAleatoria,
    geradorEmail
};