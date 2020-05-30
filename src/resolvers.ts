import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type user = {
  id: string;
  name: string;
  email: string;
};

const resolvers = {
  Query: {
    users: () => prisma.users.findMany(),
    user: (_: any, { id }: user) => prisma.users.findOne({
      where: {
        id: parseInt(id)
      }
    })
  },
  Mutation: {
    createUser: async (_: any, { name, email }: user) =>
      prisma.users.create({
        data: {
          name,
          email
        }
      })
  },
};

export default resolvers;