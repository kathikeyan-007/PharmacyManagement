
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink ,Router } from '@angular/router';
@Component({
  selector: 'app-add-medicine',
  standalone: true,
  imports: [FormsModule ,RouterLink, HttpClientModule],
  templateUrl: './add-medicine.component.html',
  styleUrl: './add-medicine.component.css'
})
export class AddMedicineComponent {
  name: string = "";
  dosageStrength: string = "";
  dosageForm: string = "";
  routeOfAdministration: string = "";
  frequency: string = "";
  duration: string = "";
  quantity: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  saveMedicine() {
    const newMedicine = {
      name: this.name,
      dosageStrength: this.dosageStrength,
      dosageForm: this.dosageForm,
      routeOfAdministration: this.routeOfAdministration,
      frequency: this.frequency,
      duration: this.duration,
      quantity: this.quantity
    };

    this.http.post<any>('http://localhost:4000/api/medicine', newMedicine)
      .subscribe(response => {
        console.log(response);
        
      }, error => {
        console.error(error);
      });
  }
}
