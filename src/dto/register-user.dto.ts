import { ApiProperty } from "@nestjs/swagger";
import { IsString, Matches, Length, IsNotEmpty } from "class-validator";
export class RegisterUserDTO {
    @ApiProperty({
        description: "UserName",
        type: String,
        example: "MUH_FADHIL_AHMAD"
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^\S*$/i)
    @Length(1, 30)
    username: string;
    @ApiProperty({
        description: "Password",
        type: String,
        example: "FADHIL_2307"
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^\S*$/i)
    @Length(1, 30)
    password: string;
}
