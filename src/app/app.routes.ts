import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./transaction/transaction-list/transaction-list.component').then((m) => m.TransactionListComponent),
  },
];
