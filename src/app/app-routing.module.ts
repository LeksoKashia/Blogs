import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: 'home', component: BlogsComponent },
  { path: 'addBlog', component: AddBlogComponent },
  { path: 'blog/:id', component: BlogPageComponent },
  { path: 'blogEdit/:id', component: BlogEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
