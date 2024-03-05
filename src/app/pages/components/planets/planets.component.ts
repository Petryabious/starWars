import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent implements OnInit {

  constructor(private _dataService: DataService){

  }

  ngOnInit(): void {
      this._dataService.getPlanets().subscribe((res)=>{
        console.log(res);
        
      })
  }

}
