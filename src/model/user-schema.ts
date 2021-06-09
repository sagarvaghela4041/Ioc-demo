import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface IUserInterface {
    id: number,
    name: string
}

@Entity()
export class User implements IUserInterface {

    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column()
    name: string = '';

}