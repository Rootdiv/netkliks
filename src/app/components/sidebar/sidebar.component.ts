import { Component, Input } from '@angular/core';
import { sidebarData } from '../../constants/sidebar.constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() title: string = '';

  sidebarData = sidebarData;
}
