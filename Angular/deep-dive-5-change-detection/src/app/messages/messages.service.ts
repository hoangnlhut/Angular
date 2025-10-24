import { Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";

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

    messages$ = new BehaviorSubject<string[]>([]);
    //using normal array
    private messages : string[] = [];

    get allMessage(){
        return [...this.messages];
    }

    addMessage(message: string) {
        this.messages = [...this.messages, message];
        this.messages$.next([...this.messages]); // emit new event
    }
}