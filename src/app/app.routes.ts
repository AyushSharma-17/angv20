import { Routes } from '@angular/router';
import { Binding } from '../pages/binding/binding';
import { Signall } from '../pages/signall/signall';
import { Condition } from '../pages/condition/condition';
import { DirectiveAtr } from '../pages/directive-atr/directive-atr';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'directive-atr',
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
    }
];
