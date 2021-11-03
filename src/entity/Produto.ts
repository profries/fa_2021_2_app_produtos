import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    preco: number;

}
