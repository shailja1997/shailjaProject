import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { CommentComponent } from './comment/comment.component';
import { PhotosComponent } from './photos/photos.component';
import { TodoListnewComponent } from './todo-listnew/todo-listnew.component';
import { TodolistComponent } from './todolist/todolist.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    component: TodolistComponent,
    path: 'todo'
  },
  {
    component: TodoListnewComponent,
    path: 'newtodo'
  },
  {
    component:UserComponent,
    path: 'user'
  },
  {
   component:PhotosComponent,
   path:'photos' 
  },
  {
    component:CommentComponent,
    path:'comments'
  },
  {
    component:AlbumComponent,
    path:'albums'
  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


