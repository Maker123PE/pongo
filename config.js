global.owner = ['51902679067']  
global.mods = ['51902679067'] 
global.prems = ['51902679067']
global.nameowner = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢.'
global.numberowner = '51902679067' 
global.mail = 'syssolutionshbomax@gmail.com' 
global.gc = 'https://whatsapp.com/channel/0029VaEsxUbJP21BfklgZS3m'
global.instagram = 'https://instagram.com/SysSolutions.Peru'
global.wm = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.wait = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.eror = '_*Server Error*_'
global.stiker_wait = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.packname = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.author = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//

global.btc = 'daftar dulu' 

//Daftar terlebih dahulu https://api.botcahx.live

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//

global.lann = 'daftar'


//Daftar https://api.betabotz.org 

global.APIs = {   

  btc: 'https://api.botcahx.live'


}

global.APIKeys = { 

  'https://api.botcahx.live': 'FhxFgLSS' 

}

//


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
