import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes : Routes = [

];

@NgModule({
	//Lista de rotas que será trabalhada. Design Pattern Singleton, ou seja, modulo unico
	imports: [RouterModule.forRoot(routes)], 
	
	//Exportação para que seja disponibilizada em toda aplicação
	exports: [RouterModule] 
})

export class AppRoutingModule {}