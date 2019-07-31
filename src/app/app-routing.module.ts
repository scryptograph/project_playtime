import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'greeting', loadChildren: './pages/greeting/greeting.module#GreetingPageModule' },
  { path: 'greeting2', loadChildren: './pages/greeting2/greeting2.module#Greeting2PageModule' },
  { path: 'database', loadChildren: './pages/database/database.module#DatabasePageModule' },
  { path: 'database/:id', loadChildren: './pages/database-detail/database-detail.module#DatabaseDetailPageModule' },
  { path: 'greeting/:id', loadChildren: './pages/greeting-detail/greeting-detail.module#GreetingDetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
