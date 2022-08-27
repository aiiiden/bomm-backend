import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllUser() {
    const users: User[] = await this.prisma.user.findMany();
    return users;
  }
}
