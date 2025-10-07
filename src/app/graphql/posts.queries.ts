import { gql, TypedDocumentNode } from 'apollo-angular';
import { GetPost, GetPosts, GetPostVariables } from './posts.types';
import { POST_TABLE_FIELDS_FRAGMENT } from './posts.fragments';

const GET_POSTS = gql<GetPosts, unknown>`
  query MyQuery {
    allPosts {
      ...PostTableFields
    }
  }
    ${POST_TABLE_FIELDS_FRAGMENT}
`;

const GET_POST = gql<GetPost, GetPostVariables>`
  query MyQuery($id: ID!) {
    Post(id: $id) {
      ...PostTableFields
      comment
    }
  }
    ${POST_TABLE_FIELDS_FRAGMENT}
`;

export {GET_POST, GET_POSTS}
