import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blogiko } from '../models/blogiko.model';
import { BlogService } from '../services/blog.service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss'],
})
export class AddBlogComponent {
  createdBlog!: Blogiko;

  constructor(private blogService: BlogService) {}

  onSubmit(blogForm: NgForm) {
    this.blogService.addBlog(blogForm);
  }
}
