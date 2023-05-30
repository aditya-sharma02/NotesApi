import { Module } from "@nestjs/common";
import { BookmarkService } from './bookmark.service';
import { BookmarkController } from './bookmark.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { BookMark, UserSchema } from "src/schema/all.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'BookMark', schema: BookMark }, { name: 'User', schema: UserSchema }]),
  ],
  providers: [BookmarkService],
  controllers: [BookmarkController]
})
export class BookMarkModule { }