// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: 'auth',
//     loadComponent: () => import('./auth/auth.component'),
//     children: [
//       {
//         path: '',
//         redirectTo: 'login',
//         pathMatch: 'full',
//       },
//       {
//         path: 'login',
//         loadComponent: () => import('./auth/login/login.component'),
//       },
//     ],
//   },
//   {
//     path: 'dashboard-estudiante-estudiante',
//     loadComponent: () =>
//       import('./core/dashboard-estudiante/dashboard-estudiante.component'),
//     children: [
//       {
//         path: 'home',
//         loadComponent: () =>
//           import('./core/dashboard-estudiante/home/home.component'),
//       },
//       {
//         path: '',
//         redirectTo: 'home',
//         pathMatch: 'full',
//       },
//       {
//         path: 'citas',
//         loadComponent: () =>
//           import('./core/dashboard-estudiante/cita/cita.component'),
//       },
//     ],
//   },
//   {
//     path: 'informes',
//     loadComponent: () =>
//       import('./core/dashboard-estudiante/dashboard-estudiante.component'),
//     children: [
//       {
//         path: 'home',
//         loadComponent: () =>
//           import('./core/dashboard-estudiante/home/home.component'),
//       },
//     ],
//   },
//   {
//     path: '',
//     redirectTo: 'auth',
//     pathMatch: 'full',
//   },
// ];
// // @NgModule({
// //     imports: [RouterModule.forRoot(routes)],
// //     exports: [RouterModule]
// //   })
// //   export class AppRoutingModule { }

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard-estudiante',
    loadComponent: () =>
      import('./dashboard-estudiante/dashboard-estudiante.component'),
    children: [
      {
        path: 'home',
        title: 'Home',
        loadComponent: () =>
          import('./dashboard-estudiante/pages/home/home.component'),
      },
      {
        path: 'citas',
        title: 'Citas',
        loadComponent: () =>
          import('./dashboard-estudiante/pages/cita/cita.component'),
      },
      {
        path: 'informes',
        title: 'Informes',
        loadComponent: () =>
          import('./dashboard-estudiante/pages/informes/informes.component'),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard-estudiante',
    pathMatch: 'full',
  },
];
