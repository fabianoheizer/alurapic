import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

    photos: Photo[] = [];

    // manter o construtor apenas para injeção de dependencia
    constructor(
            private photoService: PhotoService,
            private activatedRoute: ActivatedRoute
    ) { }

    // qualquer lógica que queiramos executar será colocada em uma fase do ciclo de vida que todo componente Angular possui.
    ngOnInit(): void {
        const userName = this.activatedRoute.snapshot.params.userName; // parametro da url
        this.photoService
            .listFromUser(userName)
            .subscribe(phtosURL => this.photos = phtosURL);
    }

}
