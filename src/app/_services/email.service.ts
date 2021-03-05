import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(model: any) {
    const params = { name: model.name, subject: model.subject, replyto: model.email, message: model.message };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('https://formspree.io/f/mpzoggpz', params, { 'headers': headers });
  }
}