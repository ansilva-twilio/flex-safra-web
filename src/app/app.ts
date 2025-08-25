import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface CustomerInfo {
  contactReason: string;
  customerName: string;
  aiRecommendation: string;
  customerSince: string;
  relationshipLevel: string;
  accountNumber: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('safra-flex-app');
  
  customerInfo: CustomerInfo = {
    contactReason: 'Dúvidas sobre cartão de crédito',
    customerName: 'João Silva Santos',
    aiRecommendation: 'Esclarecer sobre as taxas do cartão e oferecer upgrade para categoria premium',
    customerSince: 'Janeiro/2020',
    relationshipLevel: 'Premium',
    accountNumber: '1234567890'
  };
}
