import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

const PORT = 7430;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (request, response) => {
  response.json({ message: "this is root route" });
});

app.get("/reviews", async (req, res) => {
  const result = await db.query(`
        SELECT * FROM reviews
        `);
  console.log(result);
  res.json(result.rows);
});

app.post("/reviews", async (request, response) => {
  const { game_name, rating, username, review } = request.body;
  try {
    await db.query(
      `INSERT INTO reviews (game_name, rating, username, review) VALUES ($1, $2, $3, $4)`,
      [game_name, rating, username, review]
    );
    response.status(200).json({ success: true });
  } catch (error) {
    console.error("No data is getting inserted", error);
    response.status(500).json({ success: false });
  }
});

// adding a filter button
app.get("/sortbyrating", async (req, res) => {
  const result = await db.query(`
        SELECT * FROM reviews
        ORDER BY rating
        `);
  console.log(result);
  res.json(result.rows);
});
