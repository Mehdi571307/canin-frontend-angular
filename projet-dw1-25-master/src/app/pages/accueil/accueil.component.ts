import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent {
  http = inject(HttpClient);
  chiens: Chien[] = [];
cours: any;

  ngOnInit() {
   this.refreshChiens()
  }

  refreshChiens() {
    this.http
      .get<Chien[]>('http://localhost:5000/chien')
      .subscribe((chiens) => (this.chiens = chiens));
  }

  onClickSupprimer(chien: Chien) {

    if(confirm("Voulez-vous vraiment supprimer ce chien ?")) {
      this.http
        .delete('http://localhost:5000/chien/' + chien.id)
        .subscribe((reponse) => this.refreshChiens());
    }

  }
}
