require('dotenv').config();
const { getVacancies, saveApplication } = require('./lib/store');

const TOKEN = process.env.BOT_TOKEN;
if (!TOKEN) {
    console.error("Xatolik: .env faylida BOT_TOKEN topilmadi!");
    process.exit(1);
}

// Botni ishga tushirish uchun oddiy fetch asosidagi long-polling qismi
console.log("Autoport Jamoasi Boti ishga tushdi...");