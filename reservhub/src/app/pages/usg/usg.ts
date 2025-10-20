import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

interface Dienstgrad {
  value: number;
  name: string;
}

interface Tagessatz {
  [key: number]: number[]; // [0 Kinder, 1 Kind, 2 Kinder, 3 Kinder]
}

interface Praemie {
  [key: number]: number;
}

interface Berechnung {
  mindestleistung: number;
  dienstleistungspraemie: number;
  gesamt: number;
}

@Component({
  selector: 'app-usg',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatDividerModule
  ],
  templateUrl: './usg.html',
  styleUrl: './usg.scss'
})
export class Usg {
  protected readonly usgForm: FormGroup;
  protected readonly berechnungsErgebnis = signal<Berechnung>({ mindestleistung: 76.85, dienstleistungspraemie: 18.82, gesamt: 95.67 });
  
  protected readonly dienstgrade: Dienstgrad[] = [
    { value: 1, name: 'Jäger, Panzerschütze, Panzergrenadier, Kanonier, Pionier, Panzerpionier, Funker, Schütze, Flieger, Sanitätssoldat, Matrose, Gefreiter, Grenadier, Panzerjäger, Panzerkanonier, Panzerfunker' },
    { value: 2, name: 'Obergefreiter, Hauptgefreiter' },
    { value: 3, name: 'Stabsgefreiter, Oberstabsgefreiter, Unteroffizier, Maat, Fahnenjunker, Seekadett' },
    { value: 4, name: 'Stabsunteroffizier, Obermaat' },
    { value: 5, name: 'Feldwebel, Bootsmann, Fähnrich, Fähnrich zur See, Oberfeldwebel, Oberbootsmann' },
    { value: 6, name: 'Hauptfeldwebel, Hauptbootsmann, Oberfähnrich, Oberfähnrich zur See' },
    { value: 7, name: 'Stabsfeldwebel, Stabsbootsmann, Oberstabsfeldwebel, Oberstabsbootsmann, Leutnant, Leutnant zur See' },
    { value: 8, name: 'Oberleutnant, Oberleutnant zur See' },
    { value: 9, name: 'Hauptmann, Kapitänleutnant' },
    { value: 10, name: 'Stabsarzt, Stabsapotheker, Stabsveterinär, Stabshauptmann, Stabskapitänleutnant, Major, Korvettenkapitän' },
    { value: 11, name: 'Oberstabsarzt, Oberstabsapotheker, Oberstabsveterinär, Oberstleutnant, Fregattenkapitän' },
    { value: 12, name: 'Oberfeldarzt, Flottillenarzt, Oberfeldapotheker, Flottillenapotheker, Oberfeldveterinär' },
    { value: 13, name: 'Oberst, Kapitän zur See, Oberstarzt, Flottenarzt, Oberstapotheker, Flottenapotheker, Oberstveterinär und höhere Dienstgrade' }
  ];

  // Tagessätze nach Erhöhung der Mindestleistungsanpassungsverordnung vom 19. April 2024
  private readonly tagessaetze: Tagessatz = {
    1: [76.85, 89.52, 93.90, 105.34],
    2: [78.04, 90.88, 95.10, 106.29],
    3: [78.48, 91.39, 95.40, 106.44],
    4: [80.31, 93.29, 96.76, 107.26],
    5: [82.74, 96.04, 99.48, 109.89],
    6: [86.35, 100.09, 103.44, 113.81],
    7: [91.66, 106.29, 109.62, 119.88],
    8: [96.75, 111.74, 115.27, 125.24],
    9: [106.84, 123.11, 126.51, 136.56],
    10: [126.36, 145.38, 148.81, 158.91],
    11: [128.97, 148.44, 151.90, 161.76],
    12: [148.97, 172.69, 176.03, 185.57],
    13: [160.07, 186.02, 189.34, 198.70]
  };

  // Dienstleistungsprämie nach § 10 Absatz 1
  private readonly praemien: Praemie = {
    1: 18.82,
    2: 20.67,
    3: 21.59,
    4: 23.45,
    5: 24.06,
    6: 24.38,
    7: 24.68,
    8: 25.29,
    9: 25.91,
    10: 26.52,
    11: 27.15,
    12: 27.77,
    13: 29.00
  };

  protected readonly tableDisplayedColumns = ['typ', 'betrag'];
  protected readonly tableDataSource = computed(() => [
    { typ: 'Mindestleistung (§8 USG)', betrag: this.berechnungsErgebnis().mindestleistung },
    { typ: 'Dienstleistungsprämie (§ 10 Absatz 1)', betrag: this.berechnungsErgebnis().dienstleistungspraemie },
    { typ: 'Summe (steuerfrei)', betrag: this.berechnungsErgebnis().gesamt, isTotal: true }
  ]);

  constructor(private fb: FormBuilder) {
    this.usgForm = this.fb.group({
      dienstgrad: [1, Validators.required],
      anzahlKinder: [0, [Validators.required, Validators.min(0), Validators.max(3)]],
      berechnungsArt: ['tage', Validators.required],
      rdlTage: [1, [Validators.required, Validators.min(0.5)]],
      startDatum: [null],
      endDatum: [null]
    });

    // Form Value Changes überwachen
    this.usgForm.valueChanges.subscribe(() => {
      this.berechneVerguetung();
    });

    // Berechnungsart Change überwachen
    this.usgForm.get('berechnungsArt')?.valueChanges.subscribe((art) => {
      this.toggleBerechnungsArt(art);
    });

    // Datum Changes überwachen
    this.usgForm.get('startDatum')?.valueChanges.subscribe(() => this.updateTageAusDatum());
    this.usgForm.get('endDatum')?.valueChanges.subscribe(() => this.updateTageAusDatum());

    // Initiale Berechnung
    this.berechneVerguetung();
  }

  private berechneVerguetung(): void {
    const formValues = this.usgForm.value;
    const dienstgrad = formValues.dienstgrad;
    const anzahlKinder = Math.min(formValues.anzahlKinder, 3); // Max 3 Kinder
    const rdlTage = formValues.rdlTage || 1;

    const tagessatz = this.tagessaetze[dienstgrad][anzahlKinder];
    const reservistenPraemie = this.praemien[dienstgrad];
    const mindestleistung = tagessatz * rdlTage;
    const dienstleistungspraemie = reservistenPraemie * rdlTage;
    const gesamtVerguetung = mindestleistung + dienstleistungspraemie;

    this.berechnungsErgebnis.set({
      mindestleistung: Math.round(mindestleistung * 100) / 100,
      dienstleistungspraemie: Math.round(dienstleistungspraemie * 100) / 100,
      gesamt: Math.round(gesamtVerguetung * 100) / 100
    });
  }

  private toggleBerechnungsArt(art: string): void {
    if (art === 'datum') {
      this.usgForm.get('startDatum')?.setValidators([Validators.required]);
      this.usgForm.get('endDatum')?.setValidators([Validators.required]);
    } else {
      this.usgForm.get('startDatum')?.clearValidators();
      this.usgForm.get('endDatum')?.clearValidators();
    }
    this.usgForm.get('startDatum')?.updateValueAndValidity();
    this.usgForm.get('endDatum')?.updateValueAndValidity();
  }

  private updateTageAusDatum(): void {
    const startDatum = this.usgForm.get('startDatum')?.value;
    const endDatum = this.usgForm.get('endDatum')?.value;

    if (startDatum && endDatum) {
      const start = new Date(startDatum);
      const end = new Date(endDatum);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      
      this.usgForm.patchValue({ rdlTage: diffDays }, { emitEvent: false });
      this.berechneVerguetung();
    }
  }

  protected formatCurrency(value: number): string {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(value);
  }

  protected onReset(): void {
    this.usgForm.reset({
      dienstgrad: 1,
      anzahlKinder: 0,
      berechnungsArt: 'tage',
      rdlTage: 1,
      startDatum: null,
      endDatum: null
    });
  }
}