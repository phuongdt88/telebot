const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class TestController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    testHandler($) {
        $.sendMessage('day la test')
    }

    get routes() {
        return {
            'testCommand': 'testHandler'
        }
    }
}

module.exports = TestController;