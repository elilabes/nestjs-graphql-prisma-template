import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Post {
  @Field(() => String)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => Boolean)
  published: boolean;

  @Field(() => String, { nullable: true })
  content: string | null;

  @Field(() => String, { nullable: true })
  authorId: number | null;
}
