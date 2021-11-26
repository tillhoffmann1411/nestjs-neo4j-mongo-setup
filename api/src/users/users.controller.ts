import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createOneUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = await this.usersService.create(createUserDto);
    return user;
  }

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getOne({ id: userId });
  }

  @Get(':email')
  getAllUsersWith(@Param('email') email: string): Promise<User[]> {
    return this.usersService.getAllWith({ email });
  }

  @Patch('userId')
  updateUser(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update({ id: userId }, updateUserDto);
  }
}
