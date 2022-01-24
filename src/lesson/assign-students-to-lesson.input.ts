import { InputType, Field, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
@InputType()
export class AssignStudentToLessonInput {
  @IsUUID()
  @Field((type) => ID)
  lessonId: string;

  @IsUUID('4', { each: true })
  @Field((type) => [String])
  studentIds: string[];
}
