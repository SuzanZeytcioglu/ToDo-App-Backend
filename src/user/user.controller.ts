import { Controller, Post, ValidationPipe, Body} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags} from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post("/signUp")
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
    }

    
}
