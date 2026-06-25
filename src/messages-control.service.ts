import { Injectable } from '@angular/core';
import { IMessages } from './interfaces/IMessages';
import { MessageStatus } from './enums/Messages';

@Injectable({
  providedIn: 'root',
})
export class MessagesControlService {

    private messages: IMessages[] = [];
    private onChangeCallBack: (() => void) | null = null;

    registrOnChanges(callback: (() => void)) {
        this.onChangeCallBack = callback;
    };

    private notifyOfChanges() {
      if (this.onChangeCallBack) {
        this.onChangeCallBack();
      };
    };


    getMessages(): IMessages[] {
        return this.messages
    };

    private addMessage(text: string, type: MessageStatus): void {
        const newId = Date.now();
        const newMessage = {
            id: newId,
            type: type,
            text: text
        };
        this.messages.unshift(newMessage);
        this.notifyOfChanges();

        setTimeout(() => {
            this.closeMessage(newId);
        }, 5000);
    };

    closeMessage(id: number): void {
        this.messages = this.messages.filter(msg => msg.id !== id);
        this.notifyOfChanges();
    };

    showWarn (text: string) {
        this.addMessage(text, MessageStatus.WARN);
        this.notifyOfChanges();
    };

    showError (text: string) {
        this.addMessage(text, MessageStatus.ERROR);
        this.notifyOfChanges();
    };

    showSuccess (text: string) {
        this.addMessage(text, MessageStatus.SUCCESS);
        this.notifyOfChanges();
    };

    showInfo (text: string) {
        this.addMessage(text, MessageStatus.INFO);
        this.notifyOfChanges();
    };

};