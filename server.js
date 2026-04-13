import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const typeDefs = `#graphql
  type Student {
    id: ID!
    name: String!
    email: String!
    age: Int!
    career: String!
    createdAt: String!
  }

  type Course {
    id: ID!
    title: String!
    code: String!
    credits: Int!
    teacher: String!
    description: String!
    createdAt: String!
  }

  type Query {
    students: [Student!]!
    student(id: Int!): Student
    courses: [Course!]!
    course(id: Int!): Course
  }

  type Mutation {
    createStudent(name: String!, email: String!, age: Int!, career: String!): Student!
    createCourse(title: String!, code: String!, credits: Int!, teacher: String!, description: String!): Course!
  }
`;

const resolvers = {
  Query: {
    students: async () => {
      return await prisma.student.findMany({
        orderBy: { id: 'asc' },
      });
    },
    student: async (_, args) => {
      return await prisma.student.findUnique({
        where: { id: args.id },
      });
    },
    courses: async () => {
      return await prisma.course.findMany({
        orderBy: { id: 'asc' },
      });
    },
    course: async (_, args) => {
      return await prisma.course.findUnique({
        where: { id: args.id },
      });
    },
  },

  Mutation: {
    createStudent: async (_, args) => {
      return await prisma.student.create({
        data: {
          name: args.name,
          email: args.email,
          age: args.age,
          career: args.career,
        },
      });
    },
    createCourse: async (_, args) => {
      return await prisma.course.create({
        data: {
          title: args.title,
          code: args.code,
          credits: args.credits,
          teacher: args.teacher,
          description: args.description,
        },
      });
    },
  },

  Student: {
    createdAt: (parent) => parent.createdAt.toISOString(),
  },

  Course: {
    createdAt: (parent) => parent.createdAt.toISOString(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const port = parseInt(process.env.PORT || '4000', 10);
const host = '0.0.0.0';

const { url } = await startStandaloneServer(server, {
  listen: { port, host },
});

console.log(`Servidor GraphQL listo en: ${url}`);