import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpModule, JsonpModule } from "@angular/http";

import { DataService } from './data.service';
import { CounterService} from './counter/counter.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth-guard/auth-guard.service';
import { WikiService } from './wiki/wiki.service';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { Sample2Component } from './sample2/sample2.component';
import { Counter1Component } from './counter1/counter1.component';
import { Counter2Component } from './counter2/counter2.component';
import { Counter3Component } from './counter3/counter3.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { SingleActionComponent } from './single-action/single-action.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { WikiComponent } from './wiki/wiki.component';

@NgModule({
    declarations: [
        AppComponent,
        SampleComponent,
        Sample2Component,
        Counter1Component,
        Counter2Component,
        Counter3Component,
        CartComponent,
        ProductsComponent,
        SingleActionComponent,
        AdminComponent,
        LoginComponent,
        WikiComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot([
            { path: 'admin', component:  AdminComponent,
                canActivate: [AuthGuardService]
            },
            { path: 'sample', component: SampleComponent,
                children: [
                    { path: 'counter1', component: Counter1Component },
                    { path: 'counter2', component: Counter2Component },
                    { path: 'counter3', component: Counter3Component }
                ] },
            { path: 'sample2', component: Sample2Component },
            { path: 'login', component: LoginComponent },
            { path: ':id', component:  SingleActionComponent},
            { path: '', component: SampleComponent }
        ])
    ],
    providers: [DataService, CounterService, AuthService, AuthGuardService, WikiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
