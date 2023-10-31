

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

  @Prop()
  fullname: string;

  @Prop()
  username: string;

  @Prop()
  phone: number;

  @Prop()
password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);