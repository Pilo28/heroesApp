import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../../environments/environments';


@Injectable({providedIn: 'root'})

export class HeroesService {

baseUrl:string = environments.baseUrl;

 private http = inject(HttpClient);
 
 getHeroes():Observable<Hero[]> {
   return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
 }
    
}