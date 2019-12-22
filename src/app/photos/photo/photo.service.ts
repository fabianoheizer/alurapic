import { HttpClient, HttpParams } from "@angular/common/http";
import { ThrowStmt } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000';

// Decorator que diz que esse serviço pode ser injetável e seu escopo, nesse caso raiz: para toda a aplicação
@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient){}

    listFromUser(userName: string){
        
        return this.http.get<Photo[]>(API + '/' + userName + '/photos');
    }

    listFromUserPaginated(userName: string, page: number) {

        const params = new HttpParams().append('page', page.toString())
        return this.http.get<Photo[]>(API + '/' + userName + '/photos', {params});
    }
}