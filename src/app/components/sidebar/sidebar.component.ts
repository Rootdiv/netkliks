import { Component, Input } from '@angular/core';
import { sidebarData } from '../../constants/sidebar.constants';
import { ISidebarData } from '../../models/sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() title: string = '';

  sidebarData: ISidebarData[] = sidebarData;
}
