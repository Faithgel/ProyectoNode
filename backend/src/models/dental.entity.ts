import { BaseEntity, Entity, Column, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { User } from './user.entity';
import { Treatment } from './treatment.entity';

@Entity("Dental")
export class Dental extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"date", nullable: false})
    date: Date;
    
    @Column({type:"varchar", length: 50, nullable: false})
    description: string;

    @Column({type:"int", nullable: false})
    amount: number;

    @ManyToOne(() => Treatment, treatment => treatment.id, {nullable: true})
    Treatment: Treatment;

    @ManyToOne(() => User, user => user.rut, {})
    User: User;
    
}