const axios = require('axios');
const {Telegraf} = require('telegraf');
const bot = new Telegraf('5861415112:AAGYLOtEaCpYLdsq5-IZD5hDUxxUdHNosfE');

bot.start((ctx) => ctx.reply('Welcome to the bot of Satyajit'));

bot.command('whoMadeThis', (ctx) => ctx.reply('satyajit patel'));
bot.command('dijkstra', async function process(ctx) { //ctx is just a name like context
    //fetching raw link from gitub
    let response = await axios.get('https://raw.githubusercontent.com/satyajit-patel/code/master/rajVikramaditya/sdeSheet/graph/prerequisites/dijkstra.cpp');
    console.log(response.data);
    return ctx.reply(response.data);
});
bot.command('dsu', async function process(ctx) { //ctx is just a name like context
    //fetching raw link from gitub
    let response = await axios.get('https://raw.githubusercontent.com/satyajit-patel/code/master/rajVikramaditya/sdeSheet/graph/numOfOperationNeedToMakeNetworkConnected_dsu.cpp');
    console.log(response.data);
    return ctx.reply(response.data);
});

bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.launch();