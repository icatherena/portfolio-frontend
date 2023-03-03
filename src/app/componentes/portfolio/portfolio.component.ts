import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  url:string="http://catherena-beresovsky.ddns.net:9008/api/";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  obtenerDatos(): Observable<any> {
    return this.http.get<any>('./assets/data/data.json');
  }
}
