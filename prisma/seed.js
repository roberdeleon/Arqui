import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const studentsCount = await prisma.student.count();
  const coursesCount = await prisma.course.count();

  if (studentsCount === 0) {
    await prisma.student.createMany({
      data: [
        {
          name: 'Ana López',
          email: 'ana@example.com',
          age: 21,
          career: 'Ingeniería en Sistemas',
        },
        {
          name: 'Carlos Pérez',
          email: 'carlos@example.com',
          age: 23,
          career: 'Ingeniería en Sistemas',
        },
      ],
    });
  }

  if (coursesCount === 0) {
    await prisma.course.createMany({
      data: [
        {
          title: 'Arquitectura de Computadoras',
          code: 'ARQ101',
          credits: 4,
          teacher: 'Ing. Morales',
          description: 'Curso introductorio de arquitectura de computadoras',
        },
        {
          title: 'Bases de Datos',
          code: 'BD202',
          credits: 5,
          teacher: 'Ing. Castillo',
          description: 'Curso sobre diseño y consulta de bases de datos',
        },
      ],
    });
  }

  console.log('Datos insertados correctamente');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });