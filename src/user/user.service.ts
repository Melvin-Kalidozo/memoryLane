import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

export type UserT = any;

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  // This is here for testing purposes
  private readonly users = [
    {
      userId: 1,
      email: 'john@gmail.com',
      password: 'changeme',
    },
    {
      userId: 2,
      email: 'maria@gmail.com',
      password: 'guess',
    },
  ];

  // Change this to use your database instead
  async findOneByUser(email: string): Promise<UserT | undefined> {
    return this.users.find((user) => user.email === email);
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ userId: id });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
