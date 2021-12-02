import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, BeforeInsert } from "typeorm";

@Entity()
export class Current extends BaseEntity {

    @PrimaryGeneratedColumn()
    device_id: string;

    @Column()
    current: number;

    @Column()
    time_now: Date;

    @BeforeInsert()
    addTimestamp() {
        this.time_now = new Date();
    }

}