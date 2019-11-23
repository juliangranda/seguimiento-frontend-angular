import{ NgModule} from '@angular/core';

import { Routes, RouterModule} from '@angular/router';

import { PersonaComponent } from './components/persona/persona.component';
import { EmpleadorComponent } from './components/empleador/empleador.component';

const routes: Routes = [
    {path: 'usuario', component:PersonaComponent},
    {path: 'empleador',component:EmpleadorComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}