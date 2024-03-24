import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@Controller('todo')
@ApiTags('Todo')
@ApiSecurity("JWT-auth")
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @Post(':userId')
    create(
        @Body(ValidationPipe) createTodoDto: CreateTodoDto,
        @Param('userId') userId: number,
    ) {
        return this.todoService.create(createTodoDto, Number(userId));
    }

    @Get('/notCompleted/:userId')
    findAllTodosByUserIdNotCompleted(@Param('userId') userId: number) {
        return this.todoService.getNotCompleted(Number(userId));
    }

    @Get('/completed/:userId')
    findAllTodosByUserIdCompleted(@Param('userId') userId: number) {
        return this.todoService.getCompleted(Number(userId));
    }

    @Patch(':id')
    update(@Param('id') id: number) {
        return this.todoService.update(Number(id));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.todoService.remove(Number(id));
    }
}
