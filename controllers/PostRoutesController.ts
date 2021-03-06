import { Path, GET, POST, PathParam, PATCH, DELETE } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

import { PostType, LoginUser, CommentType } from '../models';
import { PostServiceBase } from '../services';

@Path('/posts')
export class PostRoutesController {
  @Inject
  private injectedService: PostServiceBase;

  @POST
  private createNewPost(post: PostType): Object {
    return this.injectedService.createNewPost(post);
  }

  @GET
  @Path(':id')
  private getPostById(@PathParam('id') id: string): Promise<Object> {
    return this.injectedService.getPostById(id);
  }

  @GET
  private getAllPosts(): Promise<Array<PostType>> {
    return this.injectedService.getAllPosts();
  }

  @PATCH
  @Path(':id')
  private updatePostById(
    @PathParam('id') id: string,
    postData: PostType
  ): Promise<Object> {
    return this.injectedService.updatePostById(id, postData);
  }

  @DELETE
  @Path(':id')
  private deletePostById(@PathParam('id') id: string): Promise<Object> {
    return this.injectedService.deletePostById(id);
  }

  @POST
  @Path(':id/comments')
  private toCommentsOnPost(
    @PathParam('id') id: string,
    commentData: CommentType
  ): Promise<Object> {
    return this.injectedService.toCommentsOnPost(id, commentData);
  }

  @GET
  @Path(':id/comments')
  private toGetAllCommentsOnPost(
    @PathParam('id') id: string
  ): Promise<Array<CommentType>> {
    return this.injectedService.toGetAllCommentsOnPost(id);
  }

  @POST
  @Path(':id/likes')
  private toLikePost(
    @PathParam('id') id: string,
    user: LoginUser
  ): Promise<Object> {
    return this.injectedService.toLikePost(id, user);
  }
}
