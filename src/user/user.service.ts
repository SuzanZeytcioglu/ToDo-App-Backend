import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
      ) {}

    create(createUserDto: CreateUserDto) {
        let user: User = new User();
        user.email = createUserDto.email;
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
        user.password = createUserDto.password;
        return this.userRepository.save(user);
      }

      findUserById(id: number) {
        return this.userRepository.findOneOrFail({ where: { id: id } });
      }

      findUserByEmail(email: string) {
        return this.userRepository.findOne({ where: { email: email } });
      }
}
