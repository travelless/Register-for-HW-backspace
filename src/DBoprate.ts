import { PrismaClient } from '@prisma/client'


class dbClient {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createUser(user: any) {
    const time = new Date();
    try{
      const result = await this.prisma.stu_data.create({
        data: {
          ...user,
          createdAt:time,
          updatedAt:time
        }
      });
      return result;
    }catch(e){
      return e;
    }
  }
}

export default dbClient;