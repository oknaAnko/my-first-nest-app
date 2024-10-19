import { BaseEntity } from 'src/base-entity';
import { Entity } from 'typeorm';

@Entity('todo')
export class Task extends BaseEntity {}
