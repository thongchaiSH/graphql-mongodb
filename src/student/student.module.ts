import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.type';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentService],
})
export class StudentModule {}
