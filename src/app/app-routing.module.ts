import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionnairemanageModule} from "./questionnairemanage/questionnairemanage.module";

const routes: Routes = [

  {
    path: '',
    loadChildren: './questionnairemanage/questionnairemanage.module#QuestionnairemanageModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
