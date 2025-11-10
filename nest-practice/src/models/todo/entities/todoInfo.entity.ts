import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class todoInfo {
  @Prop()
  title: string;

  @Prop()
  completed: boolean;
}

export const todoInfoSchema = SchemaFactory.createForClass(todoInfo);
