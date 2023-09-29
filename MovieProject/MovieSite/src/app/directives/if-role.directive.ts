import {Directive, inject, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {SystemRole} from "../services/SystemRole";
import {Observable} from "rxjs";

@Directive({
  selector: '[appIfRole]'
})
export class IfRoleDirective {

  private hasView = false;

  private viewContainer = inject(ViewContainerRef);
  private templateRef = inject(TemplateRef<any>);

  constructor() {}

  @Input() requiredRole: SystemRole = SystemRole.Mod;

  @Input() set appIfRole(userRole: Observable<SystemRole>) {
    let currentRole: SystemRole = SystemRole.Unauthorized;

    userRole.subscribe(role => {
      currentRole = role;
    });

    let isModOrHigher = currentRole >= this.requiredRole;

    if (isModOrHigher && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!isModOrHigher && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
