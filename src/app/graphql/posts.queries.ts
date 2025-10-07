import { gql, TypedDocumentNode } from 'apollo-angular';
import { GetPost, GetPosts, GetPostVariables } from './posts.types';

const GET_POSTS: TypedDocumentNode<GetPosts, unknown> = gql<GetPosts, unknown>`
  query MyQuery {
    allPosts {
      id
      title
      views
    }
  }
`;

const GET_POST: TypedDocumentNode<GetPost, GetPostVariables> = gql<GetPost, GetPostVariables>`
  query MyQuery($id: ID!) {
    Post(id: $id) {
      id
      title
      views
      comment
    }
  }
`;

export {GET_POST, GET_POSTS}
