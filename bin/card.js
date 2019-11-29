#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const colors = ['red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan']

const color = colors[Math.floor(Math.random() * colors.length)]

// Text + chalk definitions
const data = {
  name: chalk.white('Charlie Gleason /'),
  handle: chalk[color]('superhighfives'),
  work: chalk.white('User Interface / User Experience Lead at Heroku'),
  twitter: chalk[color]('twitter.com/superhighfives'),
  github: chalk[color]('github.com/superhighfives'),
  dribbble: chalk[color]('dribbble.com/superhighfives'),
  instagram: chalk[color]('instagram.com/superhighfives'),
  linkedin: chalk[color]('linkedin.com/in/superhighfives'),
  web: chalk[color]('charliegleason.com'),
  npx: chalk.white('npx superhighfives'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelDribbble: chalk.white.bold('  Dribbble:'),
  labelInstagram: chalk.white.bold(' Instagram:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const dribbbleing = `${data.labelDribbble}  ${data.dribbble}`
const instagramming = `${data.labelInstagram}  ${data.instagram}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + dribbbleing + newline + instagramming + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk[color](boxen(output, options)))
