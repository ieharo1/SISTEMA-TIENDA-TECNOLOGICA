import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
    import { MatTableModule } from '@angular/material/table';
    import { MatCardModule } from '@angular/material/card';
    import { MatFormFieldModule } from '@angular/material/form-field';
    import { MatInputModule } from '@angular/material/input';
    import { MatButtonModule } from '@angular/material/button';
    import { MatCheckboxModule } from '@angular/material/checkbox';
    import { GarantiaService } from '../services/garantia.service';

    @Component({
      selector: 'app-garantia-page',
      standalone: true,
      imports: [CommonModule, ReactiveFormsModule, MatTableModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule],
      template: `
        <mat-card class="page-card">
          <h2>Garantia</h2>
          <form [formGroup]="form" (ngSubmit)="save()" class="form-grid">
            <mat-form-field appearance=\"outline\"><mat-label>ventaId</mat-label><input matInput type=\"number\" formControlName=\"ventaId\" /></mat-form-field>
            <mat-form-field appearance=\"outline\"><mat-label>productoId</mat-label><input matInput type=\"number\" formControlName=\"productoId\" /></mat-form-field>
            <mat-form-field appearance=\"outline\"><mat-label>fechaInicio</mat-label><input matInput type=\"date\" formControlName=\"fechaInicio\" /></mat-form-field>
            <mat-form-field appearance=\"outline\"><mat-label>fechaFin</mat-label><input matInput type=\"date\" formControlName=\"fechaFin\" /></mat-form-field>
            <mat-form-field appearance=\"outline\"><mat-label>estado</mat-label><input matInput type=\"text\" formControlName=\"estado\" /></mat-form-field>
            <mat-form-field appearance=\"outline\"><mat-label>descripcion</mat-label><input matInput type=\"text\" formControlName=\"descripcion\" /></mat-form-field>
            <button mat-raised-button color="primary">Guardar</button>
          </form>
          <table mat-table [dataSource]="items" class="mat-elevation-z1">
          <ng-container matColumnDef="id">
  <th mat-header-cell *matHeaderCellDef>id</th>
  <td mat-cell *matCellDef="let row">{{row.id}}</td>
</ng-container>
          <ng-container matColumnDef="ventaId">
  <th mat-header-cell *matHeaderCellDef>ventaId</th>
  <td mat-cell *matCellDef="let row">{{row.ventaId}}</td>
</ng-container>
          <ng-container matColumnDef="productoId">
  <th mat-header-cell *matHeaderCellDef>productoId</th>
  <td mat-cell *matCellDef="let row">{{row.productoId}}</td>
</ng-container>
          <ng-container matColumnDef="fechaInicio">
  <th mat-header-cell *matHeaderCellDef>fechaInicio</th>
  <td mat-cell *matCellDef="let row">{{row.fechaInicio}}</td>
</ng-container>
          <ng-container matColumnDef="fechaFin">
  <th mat-header-cell *matHeaderCellDef>fechaFin</th>
  <td mat-cell *matCellDef="let row">{{row.fechaFin}}</td>
</ng-container>
          <ng-container matColumnDef="estado">
  <th mat-header-cell *matHeaderCellDef>estado</th>
  <td mat-cell *matCellDef="let row">{{row.estado}}</td>
</ng-container>
          <ng-container matColumnDef="descripcion">
  <th mat-header-cell *matHeaderCellDef>descripcion</th>
  <td mat-cell *matCellDef="let row">{{row.descripcion}}</td>
</ng-container>
          <ng-container matColumnDef="acciones">
  <th mat-header-cell *matHeaderCellDef>Acciones</th>
  <td mat-cell *matCellDef="let row">
    <button mat-button color="primary" (click)="edit(row)">Editar</button>
    <button mat-button color="warn" (click)="remove(row.id)">Eliminar</button>
  </td>
</ng-container>
            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>
        </mat-card>
      `,
      styles: [`.page-card { padding: 20px; display: grid; gap: 16px; }`, `.form-grid { display: grid; gap: 12px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }`, `table { width: 100%; }`]
    })
    export class GarantiaPage {
      items: any[] = [];
      displayedColumns = ['id', 'ventaId', 'productoId', 'fechaInicio', 'fechaFin', 'estado', 'descripcion', 'acciones'];
      selectedId: number | null = null;
      form = this.fb.group({
        ventaId: ['']
        productoId: ['']
        fechaInicio: ['']
        fechaFin: ['']
        estado: ['']
        descripcion: ['']
      });

      constructor(private fb: FormBuilder, private service: GarantiaService) {
        this.load();
      }

      load() {
        this.service.findAll().subscribe(data => (this.items = data));
      }

      edit(row: any) {
        this.selectedId = row.id;
        this.form.patchValue(row);
      }

      save() {
        const payload = this.form.value;
        if (this.selectedId) {
          this.service.update(this.selectedId, payload).subscribe(() => { this.selectedId = null; this.form.reset(); this.load(); });
        } else {
          this.service.create(payload).subscribe(() => { this.form.reset(); this.load(); });
        }
      }

      remove(id: number) {
        this.service.delete(id).subscribe(() => this.load());
      }
    }
