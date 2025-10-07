import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Button} from 'primeng/button';
import { PostsTableComponent } from './views/posts-table/posts-table.component'
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [
    AppComponent,
    PostsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Button,
    HttpClientModule,
    GraphQLModule,
    TableModule,
    ProgressSpinnerModule
  ],
  providers: [
    provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
