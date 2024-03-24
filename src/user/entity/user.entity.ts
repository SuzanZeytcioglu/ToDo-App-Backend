import { Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Todo } from 'src/todo/entity/todo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];

}