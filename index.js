require('dotenv').config();

const TelegramApi = require('node-telegram-bot-api');

const token = process.env.token;

const bot = new TelegramApi(token, {polling: true});


bot.setMyCommands([
    {command: '/start', description: 'bot start'},
    {command: '/info', description: 'user info'}
]);

bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start') {
        await bot.sendMessage(chatId, `welcome, ${msg.from.first_name}. just write a message and it will come to me anonymously.`);
    } else if (text === '/info') {
        await bot.sendMessage(chatId, `user id: ${msg.from.id}\nusername: ${msg.from.username}`);
    } else 
    {await bot.sendMessage(process.env.owner, `msg: ${text}`)};
    
    await console.log(msg);
});