import { Routes } from '@angular/router';
import { Binding } from '../pages/binding/binding';
import { Signall } from '../pages/signall/signall';
import { Condition } from '../pages/condition/condition';
import { DirectiveAtr } from '../pages/directive-atr/directive-atr';
import { Pipes } from '../pages/pipes/pipes';
import { Getapi } from '../pages/getapi/getapi';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'getapi',
        pathMatch: 'full'
    },
    {
        path: 'binding',
        component: Binding
    },
    {
        path:"signall",
        component:Signall
    },
    {
        path: 'condition',
        component:Condition
    },
    {
        path:'directive-atr',
        component:DirectiveAtr
    },
    {
        path:'pipes',
        component:Pipes
    },
    {
        path:'getapi',
        component:Getapi
    }
];
