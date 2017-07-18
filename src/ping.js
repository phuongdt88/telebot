const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class PingController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    pingHandler($) {
        $.sendMessage('pong cl')
    }

    get routes() {
        return {
            'pingCommand': 'pingHandler'
        }
    }
}

module.exports = PingController;