import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  constructor(
    private service: PostsService
  ) {
  }

  ngOnInit(): void {
  }

  onAddPost(form: NgForm): void {
    if(form.invalid){
      return ;
    }
    this.service.addPost(form.value);
    form.resetForm();
  }

}
