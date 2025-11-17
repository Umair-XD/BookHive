# 📚 Book Recommendation App — Node.js + Express + MongoDB + EJS

A full-stack **Book Listing & Recommendation Web App** built using:

- **Node.js / Express.js**
- **MongoDB + Mongoose**
- **EJS templating**
- **AJAX-based live search**
- **Dynamic categories**
- **Favorites system (localStorage)**
- **Pagination, grid/list views**
- **Lazy loading, animations, clean UI**

This app allows users to browse books, search instantly without page reload, filter by category or favorites, view detailed book pages, and experience smooth interactions.

---

## 🚀 Features

### 🔍 Live Search (No Reload)
- Filters across **title, author, description, category, country, price**
- Fully instant, powered by AJAX + client-side filtering
- Debounced to minimize requests

### 🏷 Category Filtering
Chips include:
- **All Books**
- **Favorites ❤️**
- **Dynamic categories from DB**

No page reload — everything is rendered live.

### ❤️ Favorites System
- Heart icon on every book card  
- Saves state in **localStorage**  
- “Favorites” category displays saved books  
- Persists across sessions  

### 🔄 Pagination
- Page numbers (1,2,3…) + Prev/Next  
- Keyboard navigation (← →)  
- Works together with search + categories + favorites  

### 🖼 Lazy Loading
- Loads images only when visible  
- Automatically falls back to `/fallback.png`  

### 🧩 Grid / List View Toggle
- Switch between **Grid** view and **List** view  
- UI updates instantly  

### 🎞 Smooth Animations
- Fade-in animations for cards  
- Intersection Observer for performance  

### 📄 Book Details Page
Includes:
- Title, author, description  
- Country, language, price  
- External link  
- Back button  

---

## 🗂 Folder Structure

```
project/
│
├── models/
│   └── book.js          # Mongoose model
│
├── public/
│   ├── css/             # stylesheets
│   ├── js/              # client-side scripts
│   ├── images/          # static assets
│   └── fallback.png     # placeholder image
│
├── views/
│   ├── index.ejs        # homepage
│   ├── books.ejs        # book list page
│   ├── info.ejs         # book detail page
│   └── 404.ejs          # not found page
│
├── init.js              # seed script
├── index.js             # main Express server
└── package.json
```

---

## 🛠 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourname/your-repo.git
cd your-repo
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Set up MongoDB connection  
Update the connection inside:

- `index.js`  
- `init.js`

```js
mongoose.connect("YOUR_MONGODB_URI_HERE");
```

### 4️⃣ Seed database (optional)
```bash
node init.js
```

This inserts sample books.

### 5️⃣ Run server
```bash
npm run dev
```
or
```bash
npm start
```

Your server will run at:

👉 **http://localhost:8080**

---

## 🔌 API Endpoints

### 📚 Get All Books
```
GET /api/books
```

### 📖 Get Single Book
```
GET /api/books/:id
```

---

## 🖼 Screenshots (optional)

```
![Books Page](screenshots/books-page.png)
![Book Detail](screenshots/book-detail.png)
```

---

## 📜 License
MIT License.
