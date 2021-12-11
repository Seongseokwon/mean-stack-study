import {Component, OnDestroy, OnInit} from '@angular/core';

import {Post} from "../post.model";
import {PostsService} from "../posts.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  // posts =[
  //   {title:'First Post', content: "This is the first post's"},
  //   {title:'Second Post', content: "This is the second post's"},
  //   {title:'Third Post', content: "This is the third post's"}
  // ]
  posts: Post[] = [];
  private postSub!: Subscription;
  constructor(
    private service : PostsService
  ) {
  }

  ngOnInit(): void {
    // this.posts = this.service.getPosts();
    this.postSub = this.service.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

}
