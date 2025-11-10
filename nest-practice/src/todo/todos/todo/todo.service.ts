import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { todoInfo } from 'src/models/todo/entities/todoInfo.entity';
import { CreateTodoDto } from 'src/todo/dto/create-todo.dto';
import { UpdateTodoDto } from 'src/todo/dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(todoInfo.name) private todoInfoModel: Model<todoInfo>,
  ) {}

  getAllTodoInfo(): Promise<todoInfo[]> {
    return this.todoInfoModel.find().exec();
  }

  getOneTodo(id: string): Promise<todoInfo | null> {
    return this.todoInfoModel.findById(id).exec();
  }

  createNewTodo(createTodoDto: CreateTodoDto): Promise<todoInfo> {
    const todo = new this.todoInfoModel({
      title: createTodoDto.title,
      completed: createTodoDto.completed || false,
    });
    return todo.save();
  }

  updateTodo(
    id: string,
    updateTodoDto: UpdateTodoDto,
  ): Promise<todoInfo | null> {
    return this.todoInfoModel
      .findByIdAndUpdate(id, { $set: updateTodoDto }, { new: true })
      .exec();
  }

  deleteTodo(id: string): Promise<todoInfo | null> {
    return this.todoInfoModel.findByIdAndDelete(id).exec();
  }
}
