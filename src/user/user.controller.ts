import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  async findAll(): Promise<any> {
    return this.userService.findAllUser();
  }
}
