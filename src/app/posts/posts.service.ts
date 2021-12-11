import {Injectable} from '@angular/core';
import {Post} from "./post.model";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor() {
  }

  getPosts(): Post[] {
    return [...this.posts];
  }

  getPostUpdateListener(): Observable<any> {
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post): void {
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
