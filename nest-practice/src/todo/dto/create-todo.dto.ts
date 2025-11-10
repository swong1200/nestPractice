import {
  IsString,
  IsBoolean,
  IsNotEmpty,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  @MinLength(3, { message: 'Title must be at least 3 characters long' })
  title: string;

  @IsBoolean({ message: 'Completed must be a boolean' })
  @IsOptional()
  completed?: boolean;
}
