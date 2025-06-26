import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service'; // adapte le chemin

@Component({
  selector: 'app-liste-chiens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-chiens.component.html',
})
export class ListeChiensComponent implements OnInit {
  chiens: Chien[] = [];

  http = inject(HttpClient);
  notification = inject(NotificationService);

  ngOnInit(){
    this.refreshChiens();
  }

  refreshChiens(){
    this.http
      .get<Chien[]>("http://localhost:5000/chien")
      .subscribe(chiens => this.chiens = chiens);
  }

  onClickSupprimer(chien: Chien) {
    
    if(confirm(`Voulez-vous vraiment supprimer ce chien : ${chien.nom} ?`)) {
      this.http
        .delete("http://localhost:5000/chien/" + chien.id)
        .subscribe(response => this.refreshChiens());
    }
  }
}  
