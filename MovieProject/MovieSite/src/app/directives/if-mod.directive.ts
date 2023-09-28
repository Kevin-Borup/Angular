import {Directive, inject, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {SystemRole} from "../services/SystemRole";

@Directive({
  selector: '[appIfMod]'
})
export class IfModDirective {
  private hasView = false;

  private viewContainer = inject(ViewContainerRef);
  private templateRef = inject(TemplateRef<any>);

  private requiredRole: SystemRole = SystemRole.Mod;

  constructor() {}

  @Input() set appIfMod(userRole: SystemRole) {
    let isModOrHigher = userRole >= this.requiredRole;

    if (isModOrHigher && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!isModOrHigher && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
