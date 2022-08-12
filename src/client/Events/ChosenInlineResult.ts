import Message from '../../structures/Message';
import Events from '../../utils/Events';
import TelegramEvent from './Event';

export default class ChosenInlineResultEvent extends TelegramEvent {
    handle(data: any) {
        if(data.message) {
            let message = new Message(this.client, data.message)
            this.client.emit(Events.ChosenInlineResult, message)
        }
    }
}