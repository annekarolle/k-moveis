import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from 'class-transformer'
import { v4 as uuid } from "uuid";


@Entity('users')
export class User {
    @PrimaryColumn('uuid')    
    id: string
    
    @Column({length: 200})
    name: string

    @Column({length: 150, unique: true})
    email:string
    
    @Column({length: 120})
    @Exclude()
    password:string
    
    @Column()
    isAdm: boolean

    @Column({})
    isActive: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
 
}