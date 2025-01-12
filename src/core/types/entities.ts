import { AddressValueObject, PaginationValueObject } from "./valueObjects"

export type CommentEntity = {
   id: number
   body: string
   postId: number
   likes: number
   user: {
      id: number
      username: string
      fullName: string
   }
} & PaginationValueObject

export type PostEntity = {
   id: number
   title: string
   content: string
   views: number
   userId: number
}

export type UserEntity = {
   id: number
   username: string
   email: string
   firstName: string
   lastName: string
   address: AddressValueObject
}
