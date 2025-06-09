// src/telegram/telegramNotifier.js

import TelegramBot from 'node-telegram-bot-api';
import telegramKeys from './telegramKeys.js';

// Розбиває довгий текст на шматки ≤4000 символів
function splitMessage(message, maxLength = 4000) {
    const chunks = [];
    for (let i = 0; i < message.length; i += maxLength) {
        chunks.push(message.slice(i, i + maxLength));
    }
    return chunks;
}

class TelegramNotifier {
    constructor() {
        this.bot           = new TelegramBot(telegramKeys.telegramToken, { polling: false });
        this.chatId        = telegramKeys.chatId;
        this.logChatId     = telegramKeys.logChatId;
        this.summaryChatId = telegramKeys.summaryChatId;
    }

    // Для profit-нотифікацій у основний/Bridge-чат
    async sendMainMessage(message, bridgeUrl = null) {
        const opts = {};
        if (bridgeUrl) {
            opts.reply_markup = {
                inline_keyboard: [[{ text: 'Bridge', url: bridgeUrl }]]
            };
        }
        await this.bot.sendMessage(this.chatId, message, opts);
    }

    // Детальні логи в лог-чат
    async sendLog(message) {
        const chunks = splitMessage(message, 4000);
        for (const chunk of chunks) {
            await this.bot.sendMessage(this.logChatId, chunk);
        }
    }

    // Новий метод: зведення по всіх сценаріях в summaryChatId
    async sendSummaryMessage(message) {
        const chunks = splitMessage(message, 4000);
        for (let i = 0; i < chunks.length; i++) {
            await this.bot.sendMessage(this.summaryChatId, chunks[i]);
            if (i < chunks.length - 1) {
                await new Promise(res => setTimeout(res, 1000));
            }
        }
    }
}

export default TelegramNotifier;
