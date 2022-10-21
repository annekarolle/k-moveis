import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinTable, OneToMany } from "typeorm";
import { Exclude } from 'class-transformer'
import { v4 as uuid } from "uuid";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";


@Entity('schedule_users_properties')
export class ScheduleUserProprierties {
    @PrimaryColumn('uuid')    
    id: string
    
    @Column({nullable: false})
    date: string

    @Column({type:'time', nullable: false})
    hour: string

    @ManyToOne(() => Properties, properties => properties.id, {eager:true, nullable:false})
    property: Properties

    @ManyToOne(() => User, user => user.id,{eager:true, nullable:false})
    user: User
  
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}