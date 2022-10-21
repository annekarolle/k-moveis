import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from 'class-transformer'
import { v4 as uuid } from "uuid";


@Entity('addresses')
export class Addresses {
    @PrimaryColumn('uuid')    
    id: string
    
    @Column({length: 200, nullable: false})
    district: string

    @Column({length: 8, nullable:false})
    zipCode:string
    
    @Column({length: 120})
    number:string
    
    @Column({length: 200 , nullable: false})
    city: string

    @Column({nullable: false, length:2})
    state: string    

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

