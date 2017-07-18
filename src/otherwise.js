const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class OtherwiseController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */

    handle($) {
        $.sendMessage('ko biet la cai gi het');
    }

}

module.exports = OtherwiseController;