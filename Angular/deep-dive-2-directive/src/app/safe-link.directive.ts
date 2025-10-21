import { Directive, ElementRef, Host, HostListener, inject, input } from "@angular/core";
import { LogDirective } from "./log.directive";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host:{
        '(click)': 'onConfirmLeavePage($event)'
    },
    hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
    //inject Host Element
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
    queryParameter = input('myapp',{alias: 'appSafeLink'});

    constructor() {
        // this.el.nativeElement.style.backgroundColor = 'brown';
        // console.log('SafeLinkDirective instantiated');
    }

    onConfirmLeavePage(event: MouseEvent) {
       const wantsToLeave =  window.confirm('Are you sure you want to leave this page?');

       if (!wantsToLeave) {
        event.preventDefault();
       }
       else{
        const address = this.hostElementRef.nativeElement.href;
        this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParameter();
        return;
       }
    }

 
}