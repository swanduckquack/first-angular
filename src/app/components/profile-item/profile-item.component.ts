import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, FormsModule],
  templateUrl: './profile-item.component.html',
  styleUrl: './profile-item.component.scss'
})
export class ProfileItemComponent {
  profile = signal({
    name: 'John Doe',
    role: 'Software Developer',
    bio: 'Passionate about Angular development',
    email: 'john.doe@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
  });

  isEditing = signal(false);

  toggleEdit() {
    this.isEditing.update(current => !current);
  }
}