import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

    @Input() photos: Photo[] = []; //para passarmos um dado para este componente, ele precisa ser um inbound property
    rows: any[] = [];

    constructor() { }
    
    ngOnChanges(changes: SimpleChanges){
        if(changes.photos){
            this.rows = this.groupColumns(this.photos);
        }
    }

    groupColumns(photos: Photo[]){
        const newRows = []

        for(let index = 0 ; index < photos.length ; index+=3 ){
            newRows.push( photos.slice(index, index + 3) ); // O primeiro parâmetro de slice é a posição inclusive na qual os elementos serão considerados. 
                                                            // O segundo é a posição final (não inclusiva).
        }

        return newRows;
    }

}
