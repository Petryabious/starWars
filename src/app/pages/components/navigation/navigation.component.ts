import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

interface Navigation {
  title: string;
  link: string;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  public navigation: Navigation[] = [];

  constructor(private _dataService: DataService) {
    this._dataService.getNavigation().subscribe((res) => {
      Object.keys(res).forEach((key: string) => {
        this.navigation.push({
          title: key,
          link: `/${key}`,
        });
      });
    });
  }
}
