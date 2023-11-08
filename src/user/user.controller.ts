import { Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from '../dto/user.dto';
import { Body as BodyDecorator } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async CreateUser(@BodyDecorator() userDto: UserDto) {
    return this.userService.CreateUser(userDto);
  }
  @Get()
  async GetAllUsers():Promise<User[]>{
    return this.userService.GetAllUsers()
  }
}