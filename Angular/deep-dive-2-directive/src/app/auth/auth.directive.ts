import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

// We won't use hostDirective here because this is STRUCTUREAL directive
// so it will not effect with hostDirective
@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({alias: 'appAuth'});
  private authService = inject(AuthService);

  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef)

  constructor() { 
    effect(() => {
      if(this.authService.activePermission() === this.userType())
      {
        console.log('SHOW ELEMENT');
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
      else
      {
        this.viewContainerRef.clear();
        console.log('User type:', this.userType());
        console.log('HIDE ELEMENT');
      }
    });
  }
}
