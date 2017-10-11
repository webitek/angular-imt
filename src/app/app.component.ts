import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
// import { Model, TodoItem } from './model';
import { TodoItem } from './model';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // model = new Model();
    model;
    name: string = 'webitek';
    filter: boolean = true;
    clear: string = '';
    color: string = 'btn-warning';
    details: boolean = false;
    workDetails: string = "";

    actionDetails: string;

    // itemSource: TodoItem;

    constructor(private dataService: DataService, private router: Router) {
        this.model = dataService.getData();
    }

    getName (){
        return this.model.user
    }

    getTodoItems(filter){
        if(this.filter){
            return this.model.items.filter( item => !item.done);
        }
        return this.model.items
    }

    changeFilter(){
        this.filter = !this.filter;
        if(this.filter){
            this.color = 'btn-warning';
        } else {
            this.color = 'btn-success';
        }
    }

    addItem(newItem) {
        if(newItem != ''){
            this.model.items.push(new TodoItem(newItem, false, this.model.items.length));
            this.clear = '';
        }
    }

    showDetails(id){
        // console.log(id);
        this.router.navigate([id]);
        // this.router.navigate([id + '']);
        // this.router.navigate([id + '', {'param': 'test'}]);

        // this.details = done;
        // this.actionDetails = action;

        /*if(!done){
          this.workDetails = "You need to do this"
        }else{
          this.workDetails = "This work already done"
        }*/
        /*setTimeout(()=>{
            this.details = false;
        }, 2000)*/
    }
}
