import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Rol")
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 50, nullable: false })
    name: string;
}
