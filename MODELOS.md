# Esquema de modelos disponibles

## Modelo: Student
Campos disponibles:
- id: Int
- name: String
- email: String
- age: Int
- career: String
- createdAt: DateTime

## Modelo: Course
Campos disponibles:
- id: Int
- title: String
- code: String
- credits: Int
- teacher: String
- description: String
- createdAt: DateTime

## Queries disponibles

### students
Retorna la lista de estudiantes.

### student(id: Int!)
Retorna un estudiante por id.

### courses
Retorna la lista de cursos.

### course(id: Int!)
Retorna un curso por id.

## Mutations disponibles

### createStudent(name: String!, email: String!, age: Int!, career: String!)
Crea un estudiante nuevo.

### createCourse(title: String!, code: String!, credits: Int!, teacher: String!, description: String!)
Crea un curso nuevo.