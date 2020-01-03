import { NgModule } from '@angular/core';
import { DarkenOnHoverDirective } from './darken-on-hover.directives';

@NgModule({
    declarations: [DarkenOnHoverDirective],
    exports: [DarkenOnHoverDirective]
})
export class DarkenOnHoverModule{

}