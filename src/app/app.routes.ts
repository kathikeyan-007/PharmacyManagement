import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { HealthComponent } from './health/health.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { StockMedicineComponent } from './stock-medicine/stock-medicine.component';
import { PaymentComponent } from './payment/payment.component';




export

const routes: Routes = [
    { path: 'home' , component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'add-medicine', component: AddMedicineComponent},
    { path: 'health', component: HealthComponent},
    { path: 'signup',component: SignupComponent},
    { path: 'login' , component: LoginComponent},
    { path: 'stock-medicine' , component:StockMedicineComponent},
    { path: 'payment', component: PaymentComponent}
    
];
