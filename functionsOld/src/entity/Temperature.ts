import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, BeforeInsert } from "typeorm";

@Entity()
export class Temperature extends BaseEntity {

    @PrimaryGeneratedColumn()
    device_id: string;

    @Column()
    temperature: number;

    @Column()
    time_now: Date;

    @BeforeInsert()
    addTimestamp() {
        this.time_now = new Date();
    }

}