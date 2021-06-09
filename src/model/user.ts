import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
export class UserDTO {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    @Length(4, 20)
    name: string;

    constructor(user: UserDTO) {
        this.id = user.id;
        this.name = user.name;
    }
}