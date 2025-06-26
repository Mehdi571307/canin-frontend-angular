import { Component, inject, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';


export interface Cours {
  id: number;
  nom: string;
  date_cours: string;
  places_disponibles: number;
  image_path?: string | null;
}

@Component({
  standalone: true,
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule],
})

export class ListeCoursComponent implements OnInit {
  cours: Cours[] = [];

  http = inject(HttpClient);
  notification = inject(NotificationService);

  ngOnInit(){
    this.refreshCours();
  }

  refreshCours(){
    this.http
      .get<Cours[]>("http://localhost:5000/cours")
      .subscribe(cours => this.cours = cours);
  }

  onClickSupprimer(cours: Cours) {
    
    if(confirm(`Voulez-vous vraiment supprimer ce cours : ${cours.nom} ?`)) {
      this.http
        .delete("http://localhost:5000/cours/" + cours.id)
        .subscribe(response => this.refreshCours());
    }
  }
}  
