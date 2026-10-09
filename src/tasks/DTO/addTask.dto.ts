import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class addTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @Max(2030)
  @Min(2020)
  year: number;

  @IsString()
  @IsIn(['todo', 'in progress', 'done'])
  status: string;
}
