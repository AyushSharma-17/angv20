import { Routes } from '@angular/router';
import { Binding } from '../pages/binding/binding';
import { Signall } from '../pages/signall/signall';
import { Condition } from '../pages/condition/condition';
import { DirectiveAtr } from '../pages/directive-atr/directive-atr';
import { Pipes } from '../pages/pipes/pipes';
import { Getapi } from '../pages/getapi/getapi';
import { Userpost } from '../pages/userpost/userpost';
import { ReactiveForms } from '../pages/reactive-forms/reactive-forms';
import { Tempvalid } from '../pages/tempvalid/tempvalid';
import { ReactiveVal } from '../pages/reactive-val/reactive-val';
import { PipeNewC } from '../pages/pipe-new-c/pipe-new-c';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'pipe-new-c',
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
    },
    {
        path:'tempvalid',
        component:Tempvalid
    },
    {
        path:'reactive-val',
        component:ReactiveVal
    },
    {
        path:'pipe-new-c',
        component:PipeNewC
    }
];
