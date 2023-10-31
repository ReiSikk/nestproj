import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
export class UserSignupDto {
  @IsNotEmpty()
  @IsString()
  fullname: string;

  @IsNotEmpty()
  @IsString()
   username: string;

   @IsNotEmpty()
   @IsNumber()
    phone: number;

   @IsNotEmpty()
   password: string;


  }