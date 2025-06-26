import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NotificationService } from '../../services/notification.service';

// Modèle minimal
interface Cours {
  id?: number;
  nom: string;
  date_cours: string;          // ISO 8601 (input type="datetime-local")
  places_disponibles: number;
  image_path?: string;
}

@Component({
  selector: 'app-edition-cours',
  standalone: true,            // retire cette ligne si tu n’utilises pas les composants standalone
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './edition-cours.component.html',
  styleUrl: './edition-cours.component.scss',
})
export class EditionCoursComponent {
  private http = inject(HttpClient);
  private notification = inject(NotificationService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private fb = inject(FormBuilder);

 
  formulaire = this.fb.group({
    nom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    date_cours: ['', Validators.required],
    places_disponibles: [1, [Validators.required, Validators.min(1)]],
    image_path: [''],
  });

  coursEdite?: Cours;  

  ngOnInit() {
    this.activatedRoute.params.subscribe(({ id }) => {
      if (id !== undefined) {
        this.http.get<Cours>(`http://localhost:5000/cours/${id}`).subscribe((cours) => {
          this.coursEdite = cours;
          this.formulaire.patchValue(cours);
        });
      }
    });
  }

  
  onClicValider() {
    if (this.formulaire.invalid) return;
    const payload = this.formulaire.value as Cours;

    
    if (this.coursEdite) {
      this.http.put(`http://localhost:5000/cours/${this.coursEdite.id}`, payload).subscribe({
        next: () => {
          this.notification.show('Le cours a bien été modifié', 'valid');
          this.router.navigateByUrl('/accueil');
        },
        error: (err) => this.handleSaveError(err, 'modifier'),
      });

    } else {
      this.http.post('http://localhost:5000/cours', payload).subscribe({
        next: () => {
          this.notification.show('Le cours a bien été ajouté', 'valid');
          this.router.navigateByUrl('/accueil');
        },
        error: (err) => this.handleSaveError(err, 'ajouter'),
      });
    }
  }

  
  private handleSaveError(err: any, action: 'ajouter'|'modifier') {
    if (err.status === 409) {
      this.notification.show(
        `Impossible de ${action} : un cours du même nom existe déjà`,
        'error'
      );
    } else {
      this.notification.show('Erreur serveur, réessaie plus tard', 'error');
    }
  }
}
