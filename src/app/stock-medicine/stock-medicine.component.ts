
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-medicine',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,HttpClientModule,CommonModule],
  templateUrl: './stock-medicine.component.html',
  styleUrl: './stock-medicine.component.css'
})

export class StockMedicineComponent implements OnInit {
  medicines: any[] = []; // Initialize an array to store medicine data

  constructor(private http: HttpClient) {} // Inject HttpClient

  ngOnInit(): void {
    this.getMedicines(); // Call the method to fetch medicines data
  }

  getMedicines(): void {
    // Make an HTTP GET request to your MongoDB server
    this.http.get<any[]>('http://localhost:4000/api/medicine').subscribe(
      (response) => {
        this.medicines = response; // Store the retrieved data in the 'medicines' array
      },
      (error) => {
        console.error('Error fetching medicines:', error);
      }
    );
  }
  deleteMedicine(medicineName: string, index: number): void {
    this.http.delete(`http://localhost:4000/api/medicine/${encodeURIComponent(medicineName)}`).subscribe(
      (response) => {
        console.log('Medicine deleted successfully', response);
        this.medicines.splice(index, 1); // Remove the medicine from the array
      },
      (error) => {
        console.error('Error deleting medicine:', error);
      }
    );
  }
  
  
  
  
}