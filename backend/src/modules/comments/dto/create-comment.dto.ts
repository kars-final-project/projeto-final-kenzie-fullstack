import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  comment: string;

  @IsString()
  user_id: string;

  @IsString()
  advertisement_id: string;
}
