"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  const API_URL = "http://localhost:3001";

  async function loadItems() {
    const res = await fetch(`${API_URL}/items`, { cache: "no-store" });
    const data = await res.json();
    setItems(data);
  }

  async function addItem(e) {
    e.preventDefault();

    if (!name.trim()) return;

    await fetch(`${API_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    setName("");
    loadItems();
  }

  async function toggleItem(id) {
    await fetch(`${API_URL}/items/${id}`, {
      method: "PATCH",
    });
    loadItems();
  }

  async function deleteItem(id) {
    await fetch(`${API_URL}/items/${id}`, {
      method: "DELETE",
    });
    loadItems();
  }

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <main style={{ maxWidth: 700, margin: "40px auto", fontFamily: "Arial" }}>
      <h1>Lista de compras</h1>

      <form onSubmit={addItem} style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nuevo producto"
          style={{ flex: 1, padding: 10 }}
        />
        <button type="submit">Agregar</button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 12,
              border: "1px solid #ddd",
              marginBottom: 10,
              borderRadius: 8
            }}
          >
            <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
              {item.name}
            </span>

            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => toggleItem(item.id)}>
                {item.done ? "Desmarcar" : "Completar"}
              </button>
              <button onClick={() => deleteItem(item.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}