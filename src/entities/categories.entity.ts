import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from 'class-transformer'
import { v4 as uuid } from "uuid";


@Entity('categories')
export class Categories {
    @PrimaryColumn('uuid')    
    id: string
    
    @Column({length: 200, unique:true, nullable: false})
    name: string
  
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}