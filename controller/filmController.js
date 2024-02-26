import pool from "../config/database.js";

// Menampilkan data seluruh list film
export const getFilms = (req, res) => {
  pool.query("SELECT * FROM film", (error, result) => {
    if (error) {
      console.error("Error fetching films:", error);
      res.status(502).json({ error: "Error fetching films" });
    } else {
      res.status(200).json(result.rows);
    }
  });
};

// Menampilkan film berdasarkan id film
export const getFilmById = async (req, res) => {
  const filmId = req.params.id;
  try {
    const result = await pool.query("SELECT * FROM film WHERE film_id = $1", [
      filmId,
    ]);
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).json({ error: "Film not found" });
    }
  } catch (error) {
    console.error("Error fetching film by id:", error);
    res.status(502).json({ error: "Error fetching film by id" });
  }
};

//Menampilkan data list Category
export const getCategories = (req, res) => {
  pool.query("SELECT * FROM category", (error, result) => {
    if (error) {
      console.error("Error fetching category:", error);
      res.status(502).json({ error: "Category Not Found" });
    } else {
      res.status(200).json(result.rows);
    }
  });
};

// Menampilkan data list film berdasarkan kategori
export const getFilmByCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    // Mendapatkan film_id berdasarkan category_id
    const resultCategory = await pool.query(
      "SELECT film_id FROM film_category WHERE category_id = $1",
      [categoryId]
    );

    // Mengambil daftar film berdasarkan film_id yang ditemukan dari query pertama
    const filmIds = resultCategory.rows.map(row => row.film_id);
    const result = await pool.query(
      "SELECT * FROM film WHERE film_id = ANY($1)",
      [filmIds]
    );

    if (result.rows.length > 0) {
      res.status(200).json(result.rows);
    } else {
      res.status(404).json({ error: "Films not found for this category" });
    }
  } catch (error) {
    console.error("Error fetching films by category_id:", error);
    res.status(502).json({ error: "Error fetching films by category_id" });
  }
};

