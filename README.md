# 🎬 **MovieWatchlist – React + Vite App (OMDb API)**

A simple and responsive Movie Search & Favorites application built with **React**, **Vite**, and **OMDb API**.
Users can search movies, view movie cards, and add/remove movies from their personal favorites list (stored locally).

---

## 🚀 **Features**

✔ Search movies using **OMDb API**
✔ Display movie posters, title, year, and details
✔ Add movies to **Favorites**
✔ Remove movies from Favorites
✔ Favorites stored in **LocalStorage**
✔ Fully responsive layout
✔ Pagination: Load more movies
✔ Modern UI with clean components
✔ Built using **React + Vite** (fast build & dev server)

---

## 🛠️ **Tech Stack**

| Technology       | Purpose                          |
| ---------------- | -------------------------------- |
| **React**        | UI components                    |
| **Vite**         | Fast bundler + dev environment   |
| **React Router** | Routing between Home & Favorites |
| **OMDb API**     | Movie data                       |
| **LocalStorage** | Save favorites                   |
| **CSS**          | Custom styling                   |

---

## 📸 **Screenshots (Optional)**

*Add screenshots if you want after you deploy.*

---

## 🔧 **Installation & Setup**

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/MovieWatchlist.git
cd MovieWatchlist
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Add OMDb API Key

You can use the free API key directly inside `services/api.js`.

### 4️⃣ Run the project

```bash
npm run dev
```

---

## 📦 **Build for Production**

```bash
npm run build
```

Build output will be inside the **dist/** folder.

---

## 🌐 **Deploy**

This project can be deployed on:

### **Vercel (Recommended)**

* Zero config
* Automatic routing
* Great for React + Vite

### **Netlify**

Drag & drop the `dist/` folder
Or connect GitHub repo

### **GitHub Pages**

Works with HashRouter or SPA redirect

---

## 📁 **Project Structure**

```
src/
 ├── components/
 │   └── MovieCard.jsx
 ├── pages/
 │   ├── Home.jsx
 │   ├── Favorites.jsx
 ├── contexts/
 │   └── MovieContext.jsx
 ├── services/
 │   └── api.js
 ├── css/
 │   ├── App.css
 │   ├── Home.css
 │   ├── Favorites.css
 │   ├── MovieCard.css
 │   ├── Navbar.css
 ├── App.jsx
 ├── main.jsx
 └── index.html
```

---

## 🔌 **API Usage (OMDb)**

### Search movies:

```bash
https://www.omdbapi.com/?apikey=YOUR_KEY&s=batman
```

Supports pages:

```
&page=1
&page=2
```

---

## ❤️ **Contributing**

Feel free to open issues or PRs for improvements.

---

## 📜 **License**

This project is open-source and free to use.

---

