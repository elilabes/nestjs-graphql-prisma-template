import { Query, Resolver } from "@nestjs/graphql";
import { prisma } from "../../prisma";
import { Post } from "./models/testing.model";

@Resolver(() => Post)
export class TestingResolver {
  @Query(() => [Post], { nullable: true })
  public async posts(): Promise<Post[]> {
    const posts = await prisma.post.findMany();
    console.log(posts);
    return posts;
  }
}
