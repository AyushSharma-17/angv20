import { Routes } from '@angular/router';
import { Binding } from '../pages/binding/binding';
import { Signall } from '../pages/signall/signall';
import { Condition } from '../pages/condition/condition';
import { DirectiveAtr } from '../pages/directive-atr/directive-atr';
import { Pipes } from '../pages/pipes/pipes';
import { Getapi } from '../pages/getapi/getapi';
import { Userpost } from '../pages/userpost/userpost';
import { ReactiveForms } from '../pages/reactive-forms/reactive-forms';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'reactive-forms',
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
    },
    {
        path:'userpost',
        component:Userpost
    },
    {
        path:'reactive-forms',
        component:ReactiveForms
    }
];
