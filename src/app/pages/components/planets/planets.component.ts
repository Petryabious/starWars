import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Planet } from '../../interfaces/responses';
import { PlanetComponent } from '../../../entities/components/planet/planet.component';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [PlanetComponent],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent implements OnInit {

  public planets: Planet[] = [];

  constructor(private _dataService: DataService){

  }

  ngOnInit(): void {
      this._dataService.getPlanets().subscribe((res)=>{
        console.log(res);
        res.results.forEach(item => {
          this.planets.push(item)
        })
      })
  }

}
