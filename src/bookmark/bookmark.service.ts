import { Injectable } from '@nestjs/common';
import { Bookmark, User } from 'src/interface/all.interface';
import { CreateBookMarkDto, EditBookMarkDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BookmarkService {

    constructor(
        @InjectModel('BookMark') private bmkModel: Model<Bookmark>,
        @InjectModel('User') private userModel: Model<User>,
    ) { }
    async getBookmark(user: User) {
        try {
            const data = await this.bmkModel.find({ link: user._id })
            if(!data){
                return 'No data found for corresponding details'
            }
            return data;
        } catch (e) {
            console.log(e)
            return e;
        }
    }

    async getBookmarkById(user: User, bmkId: string
    ) {
        try {
            const data = await this.bmkModel.find({ link: user._id, id: bmkId })
            if(!data[0]){
                return 'No data found for corresponding details'
            }
            return data[0] as Bookmark;
        } catch (e) {
            return e;
        }
    }

    async createBookmark(user: User, bmkdto: CreateBookMarkDto) {
        try {
            const newobj = new this.bmkModel({
                title: bmkdto.title,
                link: user._id,
                description: bmkdto.description
            })
            const data = await newobj.save();
            return data as Bookmark;

        } catch (e) {
            return e;
        }
    }

    async updateBookMark(user: User, bmkdto: EditBookMarkDto, bmkid: string) {
        try {
            let data = await this.bmkModel.find({id:bmkid})
            if(!data[0]){
                return 'No data found for corresponding details'
            }
            if(bmkdto.description){
                data[0].description=bmkdto.description
            }
            if(bmkdto.title){
                data[0].title=bmkdto.title
            }
            if(bmkdto.link){
                data[0].link=bmkdto.link
            }
            await data[0].save()
            return data[0] as Bookmark;

        } catch (e) {
            return e;
        }
    }

    async deleteBookMark(user: User, bmkdto: EditBookMarkDto, bmkid: string) {
        try {
            const data = await this.bmkModel.findByIdAndDelete({_id:bmkid})
            return data;
        } catch (e) {
            return e;
        }
    }
}
