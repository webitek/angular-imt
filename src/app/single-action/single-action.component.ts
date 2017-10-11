import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {DataService} from '../data.service'

@Component({
  selector: 'app-single-action',
  templateUrl: './single-action.component.html',
  styleUrls: ['./single-action.component.css']
})
export class SingleActionComponent implements OnInit {

  action;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService) {  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
        let id = +params["id"];
      this.action = this.dataService.getSingleAction(id);
    })
  }
}
