import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { UserSignupDto } from './UserSignup.dto';

// TODO: 
// 1: user.schema.ts - fullname, email (username), phone, password
// 2: create method, to sign up a user.
// 3: auth.controller.ts will need a signup method. - add validation to the UserSignupDTO
// - using the bcrypt library like we did in the NodeJs application will avoid saving passwords as clear text.
// note: when loggin in we need to use bcrypt as well to validate the password.
// 4: In the user.module.ts add the UserSchema as a Schema. Look into cats.module.ts for an example.
// 5: Change the findOne method in users.service to look in the database instead of the users array (hardcoded)
// -- Look into the CatsService to set up the connection to the database for the UsersService.

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // create a user
  async create(userSignupDto: UserSignupDto): Promise<User> {
    const user = new this.userModel(userSignupDto);
    return user.save();
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username });
  }
}