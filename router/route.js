import express from "express";
import {
  getFilms,
  getFilmById,
  getCategories,
  getFilmByCategory,
} from "../controller/filmController.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Selamat Datang Di Homework 8 Rakamin DVD Rental");
});

router.get("/api/films", getFilms); //Menampilkan seluruh list film
router.get("/api/film/:id", getFilmById); //Menampilkan list film berdasarkan id
router.get("/api/categories", getCategories); //Menampilkan seluruh list category
router.get("/api/category/:categoryId", getFilmByCategory); //Menampilkan list film berdasarkan category

export default router;
