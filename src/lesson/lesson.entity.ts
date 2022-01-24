import { ObjectIdColumn, Entity, PrimaryColumn, Column } from 'typeorm';
@Entity()
export class Lesson {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endData: string;
}
