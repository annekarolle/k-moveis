import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, JoinTable } from "typeorm";
import { Exclude } from 'class-transformer'
import { v4 as uuid } from "uuid";
import {Addresses} from "./addresses.entity";
import { Categories } from "./categories.entity";



@Entity('properties')
export class Properties {
    @PrimaryColumn('uuid')    
    id: string;
    
    @Column({default: false})
    sold: boolean;

    @Column({type: "decimal", precision: 12, scale: 2, nullable:false})
    value: number;
     
    @Column({nullable:false})
    size: number;
      
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne((type) => Addresses, {eager: true, nullable:false}) @JoinColumn()
    address: Addresses;

    @ManyToOne((type) => Categories, categories => categories.id) 
    category: Categories


    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}