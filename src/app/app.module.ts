import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListService } from './services/todo-list.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoListService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
