import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { GqlModule } from "./graphql/gql.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env"],
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      introspection: true,
      context: ({ req, res }) => ({ req, res }),
    }),
    GqlModule,
  ],
})
export class AppModule {}
