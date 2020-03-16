import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  {
    path: 'principal',
    children:[{
      path:'',
      loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
    },
    {
      path:':doramasId',
      loadChildren: () => import('./principal/doramas-detalle/doramas-detalle.module').then( m => m.DoramasDetallePageModule),

    }
  ]
    
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
