import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./componentes/inicio/inicio.module').then( m => m.InicioModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./componentes/curso/curso.module').then( m => m.CursoModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./componentes/registrar/registrar.module').then( m => m.RegistrarModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./componentes/usuario/usuario.module').then( m => m.UsuarioModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./componentes/contacto/contacto.module').then( m => m.ContactoModule)
  },
  {
    path: 'play',
    loadChildren: () => import('./componentes/play/play.module').then( m => m.PlayModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./componentes/acercade/acercade.module').then( m => m.AcercaModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
