import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";

@Entity()
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    preco: number;


}
