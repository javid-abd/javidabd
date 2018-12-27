'use strict'


const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')


const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const data = {
  name: chalk.white('               Abdullayev Javid'),
  handle: chalk.white('javid_abd'),
  work: chalk.white('Full Stack Developer at Finna'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('javid_abd'),
  github: chalk.gray('https://github.com/') + chalk.green('javid-abd'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('javidabd'),
  web: chalk.cyan('https://j-abd.com'),
  hobbies: chalk.magentaBright('Travelling, Tech and Comics'),
  npx: chalk.red('npx') + ' ' + chalk.white('javidabd'),

  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelHobbies: chalk.white.bold('    Hobbies:'),
  labelCard: chalk.white.bold('       Card:')
}


const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const hobbies = `${data.labelHobbies}  ${data.hobbies}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + 
               newline + newline + 
               working + newline + 
               twittering + newline + 
               githubing + newline + 
               linkedining + newline + 
               webing + newline +  
               hobbies + newline + newline + 
               carding 

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
