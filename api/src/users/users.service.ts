import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  /**
   * Create a new user
   * @param user
   */
  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  /**
   * Find all users
   */
  async getAll(): Promise<User[]> {
    return this.userModel.find();
  }

  /**
   * Find one user
   * @param userFilter Search query
   */
  async getOne(userFilter: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(userFilter);
  }

  /**
   * Find all users with given properties
   * @param userFilter Filter query
   */
  async getAllWith(userFilter: FilterQuery<User>): Promise<User[]> {
    return this.userModel.find(userFilter);
  }

  /**
   * Find all users with given properties
   * @param userFilter Search query
   * @param user User with updated properties
   */
  async update(
    userFilter: FilterQuery<User>,
    user: Partial<User>,
  ): Promise<User> {
    return this.userModel.findOneAndUpdate(userFilter, user);
  }
}
