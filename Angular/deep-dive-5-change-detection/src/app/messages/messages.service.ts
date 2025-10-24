import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
    //using signal
    // private messages = signal<string[]>([]);
    // allMessages = this.messages.asReadonly();

    // addMessage(message: string) {
    //     this.messages.update(oldMessages => [...oldMessages, message]);
    // }

    //using normal array
    private messages : string[] = [];

    get allMessage(){
        return [...this.messages];
    }

    addMessage(message: string) {
        this.messages = [...this.messages, message];
    }
}