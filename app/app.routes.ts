import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProductsComponent } from './Pages/products/products.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ProductFormComponent } from './Pages/product-form/product-form.component';

export const routes: Routes = [
     {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'products',
        component:ProductsComponent
    },
    {
        path:'products/:id',
        component:ProductDetailsComponent
    },
    {
        path:'products/:id/edit',
        component:ProductFormComponent
    },
    {
        path:'**',
        component:NotFoundComponent
    },
];
