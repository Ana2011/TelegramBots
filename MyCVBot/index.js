require('dotenv').config();
const {Telegraf} = require('telegraf');
const {Keyboard} = require('telegram-keyboard');

const bot = new Telegraf(process.env.TOKEN);
const axios = require('axios');


bot.start((ctx) => {
        ctx.reply(`
Hi ${ctx.from.first_name}. Some facts about me. 
Please click /Start`);
    });

    bot.command('Start', async ({ reply }) => {
        const keyboard = Keyboard.make([
          ['Start'] 
        ])
        await reply('Few facts', keyboard.reply())
      })
    
    bot.hears('Start', async ({ reply }) => {
        const keyboard = Keyboard.make([
          ['5', '10', '25'], 
          ['Next fact'] 
        ])
        await reply('I like traveling very much. How many countries have I visited?', keyboard.reply())
      })
    
    bot.hears('5', ctx => {
        ctx.reply('A little more')    
    })
    
    bot.hears('10', ctx => {
        ctx.reply('Yes, I have visited ten wonderful countries. Russia, Turkey, Spain, Thailand, USA, China, Vietnam, Greece, Oman, UAE.')
    })

    bot.hears('25', ctx => {
      ctx.reply('A little less')    
  })
    
    bot.hears('Next fact', async ({ reply }) => {
        const keyboard = Keyboard.make([
          ['Turkey', 'Vietnam', 'UAE'], 
          ['Press again'] 
        ])
        await reply('What do you think, which country I spent the most time in?', keyboard.reply())
      })
    
    bot.hears('Turkey', ctx => {
        ctx.reply('No, I have been to Turkey three times on vacation.')    
    })
    
    bot.hears('Vietnam', ctx => {
        ctx.reply('No, but Vietnam is a wonderful, hospitable country. Her famous Fobo soup will stay in my heart forever.')
    })

    bot.hears('UAE', ctx => {
      ctx.reply('Yes! I lived in this hot country for three years. I worked for a large aviation company, "Volga-Dnepr".')
  })
     
    
    bot.hears('Press again', async ({ reply }) => {
        const keyboard = Keyboard.make([
          ['China 🇨🇳', 'Oman 🇴🇲', 'Vietnam 🇻🇳'], 
          ['One more fact']
        ])
        await reply('Which country did I get my first QA work experience in?', keyboard.reply())
      })
    
    bot.hears('China 🇨🇳', ctx => {
        ctx.reply('No, but in China I worked as a warehouse logistics manager for a large pipe manufacturing enterprise.')    
    })
    
    bot.hears('Oman 🇴🇲', ctx => {
        ctx.reply('No, it was a vacation.')
    })

    bot.hears('Vietnam 🇻🇳', ctx => {
      ctx.reply('Yes, my first experience was with 1C Vietnam which is an IT company that specializes in the development, distribution of software and renders support services for business.')
  })
    
    bot.hears('One more fact', async ({ reply }) => {
        const keyboard = Keyboard.make([
          ['2017', '2019', '2021'], 
          ['Still again'] 
        ])
        await reply('What year did I get my first experience in automated testing?', keyboard.reply())
      })
    
    bot.hears('2017', ctx => {
        ctx.reply('No 😁')    
    })
    
    bot.hears('2019', ctx => {
        ctx.reply('Yes 💃')
    })

    bot.hears('2021', ctx => {
      ctx.reply('No 😁')
  })
    
    bot.hears('Still again', async ({ reply }) => {
        const keyboard = Keyboard.make([
          ['JS, SQL', 'Java, MongoDB', 'Python, Azure'], 
          ['Another fact'] 
        ])
        await reply('I have the most experience in?', keyboard.reply())
      })
    
    bot.hears('JS, SQL', ctx => {
        ctx.reply('Yes it is true. I use JavaScript for automation testing and telegram bot')    
    })
    
    bot.hears('Java, MongoDB', ctx => {
        ctx.reply('No, but I have experience in MongoDB')
    })

    bot.hears('Python, Azure', ctx => {
      ctx.reply('No, but Python it is in progress')
  })   

    bot.hears('Another fact', async ({ reply }) => {
        const keyboard = Keyboard.make([
          ['1 day', '2 weeks', '1 month'], 
          ['And lastly'] 
        ])
        await reply('What do you think, how long it took me to write this bot?', keyboard.reply())
      })
    
    bot.hears('1 day', ctx => {
        ctx.reply('Yes! Yes! It is an easy bot')    
    })
    
    bot.hears('2 weeks', ctx => {
        ctx.reply('No, but you can write a bunch of bots in two weeks')
    })

    bot.hears('1 month', ctx => {
      ctx.reply('No, but More bots can be written in one month')
  })
     
    bot.hears('And lastly', (ctx) => {
        ctx.reply(`
    I want to say  ${ctx.from.first_name} thank you for your time 😊. If you want to start again click on /start`);
    });
    
 //bot.launch();
    
    
    exports.handler = (event, context, callback) => {
      const tmp = JSON.parse(event.body); // get data passed to us
      bot.handleUpdate(tmp); // make Telegraf process that data
      return callback(null, { // return something for webhook, so it doesn't try to send same stuff again
        statusCode: 200,
        body: '',
      });
    };

