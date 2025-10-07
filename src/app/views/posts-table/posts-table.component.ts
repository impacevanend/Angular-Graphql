import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { GET_POST, GET_POSTS } from '../../graphql/posts.queries';
import { GetPost, GetPosts } from '../../graphql/posts.types';









@Component({
  selector: 'app-posts-table',
  standalone: false,
  templateUrl: './posts-table.component.html',
  styleUrl: './posts-table.component.scss'
})
export class PostsTableComponent implements OnInit, OnDestroy {

  posts: { id: string, title: string, views: number }[] = [];
  loading = false;
  postsQuery!: QueryRef<GetPosts>;
  private sub!: Subscription;

  constructor(private http: HttpClient, private apollo: Apollo) {

  }


  ngOnInit(): void {
    //this.getPosts().subscribe({
    //  next: data =>{
    //    console.log("NEXT",data);
    //  },
    //  error: error =>{
    //    console.log("ERR", error);
    //  }
    //  
    //})

    // this.apollo.query({
    //   query: query,

    // }).subscribe((data: any) => {
    //   console.log(data);
    //   this.posts = data.data?.allPosts;
    // })

    this.postsQuery = this.apollo.watchQuery({
      query: GET_POSTS,
      // pollInterval: 5000
    })

    // this.postsQuery.startPolling(5000);

    this.sub = this.postsQuery.valueChanges.subscribe((data) => {

      this.posts = [...data.data?.allPosts ?? []]
      this.loading = data.loading;


    })
  }

  refresh(): void {
    this.postsQuery.refetch();
  }

  // getPost(id: string):void{
  //   this.apollo.query({
  //     query: GET_POST,
  //     variables: {id:id}
  //   }).subscribe((data)=>{
  //     console.log(data.data.Post)
  //   })
  // }

  getPost(id: string): void {
    this.apollo.query({
      query: GET_POST,
      variables:{id: id}
    }).subscribe((data) => {
      console.log(data.data)
    })
  }

  getPosts() {
    const body = {
      query: GET_POSTS,
    }
    return this.http.post<any>(environment.apiUrl, body)
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    // this.postsQuery.stopPolling();
  }
}
