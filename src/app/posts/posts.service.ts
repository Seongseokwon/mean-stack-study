import {Injectable} from '@angular/core';
import {Post} from "./post.model";
import {Observable, Subject} from "rxjs";
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(
    private http: HttpClient
  ) {
  }

  getPosts(): Observable<HttpResponse<{message: string, posts: Post[]}>> {
    return this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts', {observe : 'response'});
  } 

  getPostUpdateListener(): Observable<any> {
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post): void {
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
