import { Injectable } from '@angular/core';
import { IMessages } from './interfaces/IMessages';
import { MessageStatus } from './enums/Messages';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesControlService {

    private messagesSubject = new BehaviorSubject<IMessages[]>([]);
    public messages$ = this.messagesSubject.asObservable();
   
    private get currentMessages():IMessages[] {
       return this.messagesSubject.getValue();
    }

    private addMessage(text: string, type: MessageStatus): void {
        const newId = Date.now();
        const newMessage = {
            id: newId,
            type: type,
            text: text
        };
        
        const currenMessages = this.currentMessages;
        const updatedMessages = [newMessage, ...currenMessages];
        this.messagesSubject.next(updatedMessages);

        setTimeout(() => {
            this.closeMessage(newId);
        }, 5000);
    };

    closeMessage(id: number): void {
        const currentMessages = this.currentMessages;
        const updatedMessages = currentMessages.filter(msg => msg.id !== id);
        this.messagesSubject.next(updatedMessages);
    };

    showWarn (text: string) {
        this.addMessage(text, MessageStatus.WARN);
    };

    showError (text: string) {
        this.addMessage(text, MessageStatus.ERROR);
    };

    showSuccess (text: string) {
        this.addMessage(text, MessageStatus.SUCCESS);
    };

    showInfo (text: string) {
        this.addMessage(text, MessageStatus.INFO);
    };

};