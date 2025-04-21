import { Component } from '@angular/core';
import { ProfileItemComponent } from '../components/profile-item/profile-item.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileItemComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
}