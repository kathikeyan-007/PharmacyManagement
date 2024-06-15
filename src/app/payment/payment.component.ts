import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GooglePayButtonModule } from '@google-pay/button-angular';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule,HttpClientModule, GooglePayButtonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

    buttonWidth = 240;
    paymentRequest: google.payments.api.PaymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [{
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }],
      merchantInfo: {
        merchantId: "12345678901234567890",
        merchantName: "Demo Merchant"
      },
      transactionInfo: {
        totalPriceStatus: "FINAL",
        totalPriceLabel: "Total",
        totalPrice: "100.00",
        currencyCode: "USD",
        countryCode: "US"
      }
    };
  
    onLoadPaymentData(event: any): void {
      console.log(event, ">>Data");
    }
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
  }
