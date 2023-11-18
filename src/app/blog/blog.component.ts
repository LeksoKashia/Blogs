import { Component, Input, OnInit } from '@angular/core';
import { Blogiko } from '../models/blogiko.model';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input() blog!: Blogiko;
  ngOnInit(): void {
    console.log(1);
  }
  constructor(public blogService: BlogService) {}

  deleteBlog(blodId: number) {
    return this.blogService.deleteBlog(blodId);
  }
}
