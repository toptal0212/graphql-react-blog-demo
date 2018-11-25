import { ApiModelProperty } from '@nestjs/swagger';
import { IAuthor } from '../../../model/Author';

export class Author implements IAuthor {
  @ApiModelProperty()
  avatarUrl: string;
  @ApiModelProperty()
  displayName: string;
  @ApiModelProperty()
  email: string;
  @ApiModelProperty()
  firstName: string;
  @ApiModelProperty()
  id: string;
  @ApiModelProperty()
  joinedTimestamp: number;
  @ApiModelProperty()
  lastName: string;
}
