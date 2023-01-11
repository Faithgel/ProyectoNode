import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity("Tratamiento")
export class Treatment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 50, nullable: false })
    name: string;

    @Column({ type: "varchar", length: 250, nullable: false })
    diagnosis: string;

    @Column({ type: "varchar", length: 250, nullable: false })
    description: string;

    @Column({ type: "varchar", length: 250})
    medication: string;
}