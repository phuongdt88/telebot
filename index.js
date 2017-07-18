'use strict'

const Telegram = require('telegram-node-bot')
const TextCommand = Telegram.TextCommand
const PingController = require('./src/ping')
const TestController = require('./src/test')
const OtherwiseController = require('./src/otherwise')

const tg = new Telegram.Telegram('401409444:AAHV-5W8XI7fLXYj91qz09_MzJyu8_dg-4M', {
    workers: 1
})

tg.router
    .when(new TextCommand('ping', 'pingCommand'), new PingController())
    .when(new TextCommand('test', 'testCommand'), new TestController())
    .otherwise(new OtherwiseController())