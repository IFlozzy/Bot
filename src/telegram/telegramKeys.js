// src/telegram/telegramKeys.js
// Зберігайте ключі через змінні оточення або в цьому файлі для тестування
export default {
    telegramToken: process.env.TELEGRAM_TOKEN || '7990373015:AAGht-CPGtvdldYZgs8SxHubWdxVnXHnhMc',
    chatId: process.env.TELEGRAM_CHAT_ID || '-4600671433',
    logChatId: process.env.TELEGRAM_LOG_CHAT_ID || '-1002636566842',
    summaryChatId: process.env.TELEGRAM_SUMMARY_CHAT_ID || '-4911471472',
}