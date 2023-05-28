import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BookMarkModule } from './bookmark/bookmark.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestpracapi'),
    AuthModule,
    UserModule,
    BookMarkModule
  ],
  providers: [UserService],
})
export class AppModule {}
