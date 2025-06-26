// src/app/services/cours.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cours {
  id: number;
  nom: string;
  date_cours: string;          // ISO
  places_disponibles: number;
  image_path?: string | null;
}

@Injectable({ providedIn: 'root' })
export class CoursService {
  private apiUrl = 'http://localhost:5000/cours';

   http=(inject(HttpClient)); //inject HttpClient{}

  list(): Observable<Cours[]> {
    return this.http.get<Cours[]>(this.apiUrl);
  }
}
