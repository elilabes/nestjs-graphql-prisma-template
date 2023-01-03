import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Author } from "./author.model";

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => Boolean)
  published: boolean;

  @Field(() => String, { nullable: true })
  content: string | null;

  @Field(() => Author, { nullable: true })
  author: Author | null;
}
