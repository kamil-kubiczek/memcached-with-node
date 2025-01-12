import { CommentEntity, PostEntity, UserEntity } from "@core/types/entities"

export function mapCommentResponseToCommentEntity(response: any): CommentEntity {
   return {
      id: response.id,
      body: response.body,
      postId: response.postId,
      likes: response.likes,
      user: {
         id: response.user.id,
         username: response.user.username,
         fullName: response.user.firstName + " " + response.user.lastName
      },
      total: response.total,
      limit: response.limit,
      skip: response.skip
   }
}

export function mapPostResponseToPostEntity(response: any): PostEntity {
   return {
      id: response.id,
      title: response.title,
      content: response.body,
      views: response.views,
      userId: response.userId
   }
}

export function mapUserResponseToUserEntity(response: any): UserEntity {
   return {
      id: response.id,
      username: response.username,
      email: response.email,
      firstName: response.firstName,
      lastName: response.lastName,
      address: {
         street: response.address.adress,
         city: response.address.city,
         zipcode: response.address.postalCode,
         state: response.address.state
      }
   }
}
