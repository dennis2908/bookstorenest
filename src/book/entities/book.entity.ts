import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 90 })
  fullname: string;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  @Column('decimal')
  total: number;

  @Column({ type: 'text' })
  order: string;
}
