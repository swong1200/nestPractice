import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { TodoService } from './todo/todo.service';

@Controller('todos')
export class TodosController {
  todos = [{ id: 1, title: 'Learn Nest', completed: false }];

  constructor(private todoService: TodoService) {}

  @Get()
  @HttpCode(200)
  async getAll() {
    const res = await this.todoService.getAllTodoInfo();
    return res;
  }

  @Get(':id')
  @HttpCode(200)
  async getTodo(@Param('id') id: string) {
    const todo = await this.todoService.getOneTodo(id);

    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    return todo;
  }

  @Post()
  @HttpCode(201)
  async createTodo(@Body() createTodoDto: CreateTodoDto) {
    const res = await this.todoService.createNewTodo(createTodoDto);
    return res;
  }

  @Patch(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    const updatedTodo = await this.todoService.updateTodo(id, updateTodoDto);

    if (!updatedTodo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return updateTodoDto;
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteTodo(@Param('id') id: string) {
    const deletedTodo = await this.todoService.deleteTodo(id);

    if (!deletedTodo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
  }
}
