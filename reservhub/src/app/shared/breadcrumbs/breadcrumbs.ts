import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../models/page-content.model';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss'
})
export class Breadcrumbs {
  items = input.required<Breadcrumb[]>();
}