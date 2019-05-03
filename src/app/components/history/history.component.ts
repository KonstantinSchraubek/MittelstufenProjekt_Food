import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    alert("test")
    const response = this.databaseService.getHistory();
    response.then((val) => {
      val.forEach(element => {
        console.log(element);
      });

    });
  }

}
