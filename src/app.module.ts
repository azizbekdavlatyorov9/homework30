import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "postgres",
      username: "postgres",
      port: 5432,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      entities:[],
      synchronize:true
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
