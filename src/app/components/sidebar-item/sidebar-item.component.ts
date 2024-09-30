import { Component, Input } from '@angular/core';
import { ISidebarData } from '../../models/sidebar.model';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss',
})
export class SidebarItemComponent {
  @Input() sidebarText!: ISidebarData;
}
