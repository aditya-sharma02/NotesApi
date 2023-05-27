import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.controller';
import { BookMarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestpracapi'),
    AuthModule,
    UserModule,
    BookMarkModule
  ],
})
export class AppModule {}
