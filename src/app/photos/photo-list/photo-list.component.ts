import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

    photos: Photo[] = [];
    filter: string = '';

    hasMore: boolean = true;
    currentPage: number = 1;
    userName: string = '';

    // manter o construtor apenas para injeção de dependencia
    constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

    // qualquer lógica que queiramos executar será colocada em uma fase do ciclo de vida que todo componente Angular possui.
    ngOnInit(): void {
        this.userName = this.activatedRoute.snapshot.params.userName;

        this.photos = this.activatedRoute.snapshot.data.photos
        //Também é possível usar this.activatedRoute.snapshot.data['photos'].

       // .subscribe(filter => this.filter = filter);
    }

    load() {
        this.photoService
            .listFromUserPaginated(this.userName, ++this.currentPage)
            .subscribe( photo => {
                this.filter = '';
                this.photos = this.photos.concat(photo);
                if(!this.photos.length){
                    this.hasMore = false;
                }
            });
    }

}
