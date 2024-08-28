import { IsNotEmpty } from 'class-validator'

export class UserLoginViewModelDTO {
    @IsNotEmpty({ message: 'field required' })
    public userName: string;

    @IsNotEmpty({ message: 'field required' })
    public userId: number;

    @IsNotEmpty({ message: 'field required' })
    public password: string;

    constructor(
        userName?: string,
        password?: string,
        userId?: number
    ) {
        this.userName = userName || '';
        this.password = password || '';
        this.userId = userId || 0;
    }
}