import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: [
    './blog-edit.component.scss',
    '../add-blog/add-blog.component.scss',
  ],
})
export class BlogEditComponent implements OnInit {
  blog: any;
  title: string = '';
  text: string = '';
  author: string = '';

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const blogId = +params['id'];

      this.blog = this.blogService.getBlogById(blogId);

      this.title = this.blog.title;
      this.text = this.blog.text;
      this.author = this.blog.author;
    });
  }

  editBlog(blogForm: NgForm) {
    this.blogService.editBlog(blogForm, this.blog);
  }
}
