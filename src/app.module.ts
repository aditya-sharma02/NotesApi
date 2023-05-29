import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BookMarkModule } from './bookmark/bookmark.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    // MongooseModule.forRoot("mongodb://127.0.0.1:27017/nestpracapi")
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('DB_NAME')
      }),
      inject: [ConfigService]
    }),
    AuthModule,
    UserModule,
    BookMarkModule
  ],
})
export class AppModule {}
