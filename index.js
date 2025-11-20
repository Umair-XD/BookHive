let express = require("express");
let mongoose = require("mongoose");
let Data = require("./models/book");
let path = require("path");

const app = express();

// ========================
// Middleware Configuration
// ========================
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ========================
// Database Connection
// ========================
main()
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });

async function main() {
  await mongoose.connect(
    "mongodb+srv://wasifbinnasir:wasifbinnasir@cluster0.h8sdsew.mongodb.net/fizabookhive?retryWrites=true&w=majority&appName=Cluster0"
  );
}

// ========================
// Helper Function
// ========================

// Escape regex special characters to prevent RegExp errors
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ========================
// Routes
// ========================

// Home Page
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/books", async (req, res) => {
  try {
    let queryTitle = req.query.title || "";
    let category = req.query.category || "all";

    let filter = {};

    // CATEGORY FILTER
    if (category !== "all") {
      filter.category = new RegExp(category, "i");
    }

    // SEARCH FILTER
    if (queryTitle.trim() !== "") {
      const safe = escapeRegex(queryTitle.trim());
      const regex = new RegExp(safe, "i");

      filter.$or = [
        { title: regex },
        { author: regex },
        { description: regex },
        { country: regex },
        { category: regex }
      ];
    }

    // GET BOOKS
    let allData = await Data.find(filter).sort({ title: 1 });

    // AJAX REQUEST → Return JSON
    if (req.headers["x-requested-with"] === "XMLHttpRequest") {
      return res.json({ allData });
    }

    // GET DISTINCT CATEGORIES FOR CATEGORY BAR
    let categories = await Data.distinct("category");

    // RENDER PAGE
    res.render("books.ejs", {
      allData,
      queryTitle,
      category,
      categories
    });

  } catch (err) {
    console.error("Error loading books:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Individual Book Detail Page
app.get("/books/:id", async (req, res) => {
  try {
    let { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid book ID");
    }

    let bookdata = await Data.findById(id);

    if (!bookdata) {
      return res.status(404).send("Book not found");
    }

    res.render("info.ejs", { bookdata });
  } catch (error) {
    console.error("Error fetching book details:", error);
    res.status(500).send("Error loading book details");
  }
});

// Back Button (redirect to book list)
app.post("/books/book", (req, res) => {
  res.redirect("/books");
});

// ========================
// API Routes (Optional)
// ========================

// Get all books
app.get("/api/books", async (req, res) => {
  try {
    let allData = await Data.find();
    res.json({ success: true, count: allData.length, data: allData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get book by ID
app.get("/api/books/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let bookdata = await Data.findById(id);

    if (!bookdata) {
      return res.status(404).json({ success: false, error: "Book not found" });
    }

    res.json({ success: true, data: bookdata });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ========================
// Error Handling
// ========================

// 404 Page
app.use((req, res) => {
  res.status(404).render("404.ejs");
});

// Server Error Handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).send("Something went wrong!");
});

// ========================
// Start Server
// ========================
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});

module.exports = app;
