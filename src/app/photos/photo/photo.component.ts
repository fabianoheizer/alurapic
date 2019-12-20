import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {

    // @Input() indica que a propriedade pode receber parametro
    // Indicamos que o description e o input são Inbound properties
    @Input() description= ''; 
    @Input() url = '';
}