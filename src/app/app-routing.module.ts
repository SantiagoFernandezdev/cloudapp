import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccesoGuard } from './guards/acceso.guard';
import { PrincipalGuard } from './guards/principal.guard';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   // { path: '', redirectTo: 'formularios/:token', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [PrincipalGuard] },
  { path: 'formularios/:token/:login', loadChildren: './pages/formularios/formularios.module#FormulariosPageModule',
   canActivate: [AccesoGuard] },
  { path: 'formulario/:id', loadChildren: './pages/formulario/formulario.module#FormularioPageModule', canActivate: [AccesoGuard] },
  { path: 'help', loadChildren: './pages/docs/help/help.module#HelpPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
