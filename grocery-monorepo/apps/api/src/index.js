const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Checklist API",
    version: "1.0.0",
    description: "API para lista de compras/checklist",
  },
  servers: [
    {
      url: process.env.API_URL || `http://localhost:${process.env.PORT || 3001}`,
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/index.js"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Verifica que la API esté activa
 *     responses:
 *       200:
 *         description: API funcionando
 */
app.get("/health", (req, res) => {
  res.json({ ok: true });
});

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Obtener todos los items
 *     responses:
 *       200:
 *         description: Lista de items
 */
app.get("/items", async (req, res) => {
  try {
    const items = await prisma.item.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(items);
  } catch (error) {
    console.error("GET /items error:", error);
    res.status(500).json({ error: "Error al obtener items", detail: error.message });
  }
});

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Crear un item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Item creado
 */
app.post("/items", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ message: "El nombre es obligatorio" });
    }

    const item = await prisma.item.create({
      data: {
        name: name.trim(),
      },
    });

    res.status(201).json(item);
  } catch (error) {
    console.error("POST /items error:", error);
    res.status(500).json({ error: "Error al crear item", detail: error.message });
  }
});

/**
 * @swagger
 * /items/{id}:
 *   patch:
 *     summary: Cambiar estado done de un item
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item actualizado
 */
app.patch("/items/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const current = await prisma.item.findUnique({
      where: { id },
    });

    if (!current) {
      return res.status(404).json({ message: "Item no encontrado" });
    }

    const updated = await prisma.item.update({
      where: { id },
      data: { done: !current.done },
    });

    res.json(updated);
  } catch (error) {
    console.error("PATCH /items error:", error);
    res.status(500).json({ error: "Error al actualizar item", detail: error.message });
  }
});

/**
 * @swagger
 * /items/{id}:
 *   delete:
 *     summary: Eliminar un item
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item eliminado
 */
app.delete("/items/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.item.delete({
      where: { id },
    });

    res.json({ message: "Item eliminado" });
  } catch (error) {
    console.error("DELETE /items error:", error);
    res.status(500).json({ error: "Error al eliminar item", detail: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});