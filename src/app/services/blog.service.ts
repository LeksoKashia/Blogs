import { Injectable } from '@angular/core';
import { Blogiko } from '../models/blogiko.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogs: Blogiko[] = [
    {
      id: 1,
      text: 'A blog (a truncation of "weblog")[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web page. Until 2009, blogs were often the work of a single individual, occasionally of a small group, and often covered a single subject or topic.',
      title: 'magari',
      author: 'L.K',
    },
    {
      id: 2,
      text: 'The emergence and growth of blogs in the late 1990s coincided with the advent of web publishing tools',
      title: 'uketesi',
      author: 'L.K',
    },

    {
      id: 3,
      text: 'IMAZE KIDE UKETESI blogi',
      title: 'uUketesi',
      author: 'L.K',
    },
  ];

  constructor(private router: Router) {}

  getBlogs() {
    return this.blogs;
  }

  getBlogById(id: number) {
    return this.blogs[id - 1];
  }

  addBlog(blogForm: NgForm) {
    if (blogForm.valid) {
      this.blogs.push(
        new Blogiko(
          this.blogs.length + 1,
          blogForm.value.text,
          blogForm.value.title,
          blogForm.value.author
        )
      );
    }

    this.router.navigate(['/']);
  }
  editBlog(blogForm: NgForm, blog: Blogiko) {
    blog.title = blogForm.value.title;
    blog.text = blogForm.value.text;
    blog.author = blogForm.value.author;
    this.router.navigate(['/']);
  }

  deleteBlog(blogId: number) {
    delete this.blogs[blogId - 1];
  }
}
