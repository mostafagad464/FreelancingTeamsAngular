import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wallet } from '../_models/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http:HttpClient) { }

  private baseUrl = "https://localhost:7152/api/Wallets/";

  createWallet(wallet:Wallet)
  {
    return this.http.post<Wallet>(this.baseUrl, wallet);
  }
  getWallet(id:number)
  {
    return this.http.get<Wallet>(this.baseUrl+id)
  }
}
