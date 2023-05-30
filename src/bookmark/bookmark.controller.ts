import { Controller, UseGuards, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { BookmarkService } from './bookmark.service';
import { GetUser } from 'src/auth/decorator';
import { User } from 'src/interface/all.interface';
import { EditBookMarkDto, CreateBookMarkDto } from './dto';

@UseGuards(JwtGuard)
@Controller('bookmark')
export class BookmarkController {
    constructor(
        private bookmarkService: BookmarkService
    ) { }

    @Get('/all')
    getBookmark(
        @GetUser() user: User
    ) {
        return this.bookmarkService.getBookmark(user)
    }

    @Get('/:id')
    getBookmarkById(
        @GetUser() user: User,
        @Param('id') bmkId: string
    ) {
        return this.bookmarkService.getBookmarkById(user, bmkId)
    }

    @Post('/createbmk')
    async createBookmark(
        @GetUser() user: User,
        @Body() bmkdto: CreateBookMarkDto
    ) {
        return this.bookmarkService.createBookmark(user, bmkdto)
    }

    @Patch('/updatebmk/:id')
    async updateBookMark(
        @GetUser() user: User,
        @Body() bmkdto: EditBookMarkDto,
        @Param('id') bmkid: string
    ) {
        return this.bookmarkService.updateBookMark(user, bmkdto, bmkid)
    }

    @Delete('/deletebmk/:id')
    deleteBookMark(
        @GetUser() user: User,
        @Body() bmkdto: EditBookMarkDto,
        @Param('id') bmkid: string
    ) {
        return this.bookmarkService.deleteBookMark(user, bmkdto, bmkid)
    }
}
