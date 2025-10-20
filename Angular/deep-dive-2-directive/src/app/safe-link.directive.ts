import { Directive, ElementRef, Host, HostListener, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host:{
        '(click)': 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective {
    private el = inject(ElementRef);
    queryParameter = input('myapp',{alias: 'appSafeLink'});

    constructor() {
        // this.el.nativeElement.style.backgroundColor = 'brown';
        // console.log('SafeLinkDirective instantiated');
    }

    // private highlight(color: string) {
    //     this.el.nativeElement.style.backgroundColor = color;
    // }

    // onMouseEnter() {
    //     this.highlight('brown');
    // }
    
    // onMouseLeave() {
    //     this.highlight('');
    // }

    onConfirmLeavePage(event: MouseEvent) {
       const wantsToLeave =  window.confirm('Are you sure you want to leave this page?');

       if (!wantsToLeave) {
        event.preventDefault();
       }
       else{
        const address = (event.target as HTMLAnchorElement).href;
        (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParameter();
        return;
       }
    }

 
}