import { Module } from '@nestjs/common';
import { TodosController } from './todos/todos.controller';
import { TodoService } from './todos/todo/todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  todoInfo,
  todoInfoSchema,
} from 'src/models/todo/entities/todoInfo.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: todoInfo.name, schema: todoInfoSchema },
    ]),
  ],
  controllers: [TodosController],
  exports: [],
  providers: [TodoService],
})
export class TodoModule {}
