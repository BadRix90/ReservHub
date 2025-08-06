import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  protected readonly isSubmitting = signal(false);
  protected readonly toastData = signal<{
    show: boolean;
    message: string;
    type: 'success' | 'error' | 'warning';
  }>({ show: false, message: '', type: 'success' });

  protected readonly contactForm = this.createContactForm();

  constructor() {
    effect(() => {
    });
  }

  private createContactForm() {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacy: [false, [Validators.requiredTrue]]
    });
  }

  protected validateField(fieldName: string): void {
    const field = this.contactForm.get(fieldName);
    field?.markAsTouched();
  }

  protected getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} ist erforderlich`;
      if (field.errors['minlength']) return `${fieldName} ist zu kurz`;
      if (field.errors['email']) return 'Ungültiges E-Mail-Format';
    }
    return '';
  }

  protected submitForm(): void {
    if (this.contactForm.valid) {
      this.sendFormData();
    } else {
      this.markAllFieldsAsTouched();
      this.showToast('Bitte füllen Sie alle Felder korrekt aus', 'warning');
    }
  }

  private sendFormData(): void {
    this.isSubmitting.set(true);

    const formData = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };

    this.http.post('sendMail.php', formData).subscribe({
      next: () => this.handleSuccess(),
      error: () => this.handleError(),
      complete: () => this.isSubmitting.set(false)
    });
  }

  private handleSuccess(): void {
    this.showToast('Nachricht erfolgreich gesendet!', 'success');
    this.contactForm.reset();
  }

  private handleError(): void {
    this.showToast('Fehler beim Senden der Nachricht', 'error');
  }

  private markAllFieldsAsTouched(): void {
    this.contactForm.markAllAsTouched();
  }

  private showToast(message: string, type: 'success' | 'error' | 'warning'): void {
    this.toastData.set({ show: true, message, type });
    setTimeout(() => this.hideToast(), 4000);
  }

  protected hideToast(): void {
    this.toastData.set({ show: false, message: '', type: 'success' });
  }
}
