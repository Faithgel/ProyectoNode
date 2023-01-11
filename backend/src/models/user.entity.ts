import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne } from 'typeorm';
import { Role } from './role.entity';

@Entity("User")
export class User extends BaseEntity {
    @PrimaryColumn({ type: "int", nullable: false })
    rut: number;

    @Column({ type: "varchar", length: 50, nullable: false })
    name: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    fatherLastname: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    motherLastName: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    mail: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    password: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    address: string;
    
    @ManyToOne(type => Role, role => role)
    role: Role;
}
