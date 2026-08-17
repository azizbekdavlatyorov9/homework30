import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      username: "postgres",
      port: 5432,
      database: "docker",
      password: "1234",
      entities:[],
      synchronize:true
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
