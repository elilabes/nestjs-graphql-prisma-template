import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  email: string;

  @Field(() => String)
  name: string;
}
