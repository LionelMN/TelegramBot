const { Telegraf } = require('telegraf');

const token = require('./enviroment')
const ranking = require('./ranking.js')

const bot = new Telegraf(token)

bot.start((ctx) => {
    ctx.reply(`
    Welcome ${ctx.from.first_name} ${ctx.from.last_name}
    To see what we can offer yo try /help
    `)
})

bot.help((ctx) => {
    ctx.reply(`
        Puedo hacer unas cuantas cosas 👍:
            /MarcosInvita Friendly reminder a @MarcosOj de que invite
        ¿Quieres ver cómo va alguno de nosotros con su lista?:
            /Lionel
            /Altreza
            /Parcos
    `)
})

bot.settings((ctx) => {
    ctx.reply("Under maintenance 🔧")
})

const lista = ranking;

bot.command(['lionel', 'Lionel'], (ctx) => {
    let rank = lista.filter(user => user.user === 'Lionel')
    ctx.reply(`A ver como va @LionelMN:
        Juegos: ${rank[0].games}
        Series: ${rank[0].series}
        Mangas: ${rank[0].mangas}
        Películas: ${rank[0].movies}`)
})

bot.command(['altreza', 'Altreza'], (ctx) => {
    let rank = lista.filter(user => user.user === 'Altreza')
    ctx.reply(`A ver como va @Altreza:
        Juegos: ${rank[0].games}
        Series: ${rank[0].series}
        Mangas: ${rank[0].mangas}
        Películas: ${rank[0].movies}`)
})

bot.command(['marcos', 'Marcos', 'Parcos', 'parcos'], (ctx) => {
    let rank = lista.filter(user => user.user === 'Marcos')
    ctx.reply(`A ver como va @MarcosOJ:
        Juegos: ${rank[0].games}
        Series: ${rank[0].series}
        Mangas: ${rank[0].mangas}
        Películas: ${rank[0].movies}`)
})


bot.command(['MarcosInvita', 'marcosinvita', 'marcosInvita', 'Marcosinvita', 'MARCOSINVITA'], (ctx) => {
    ctx.reply('Parcos invita 👀👀')
})

bot.hears('123', (ctx) => {
    ctx.reply('Pero es uno dos tres o cientoveintitré?')
})

bot.launch();
