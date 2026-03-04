const express = require('express');
const path = require('path');

const indexRoutes = require('./routes/index.routes');
const teamRoutes = require('./routes/team.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// ---- View engine (EJS) ----
app.set('views', path.join(__dirname, 'views')); // папку views создадут другие
app.set('view engine', 'ejs');

// ---- Static files ----
app.use(express.static(path.join(__dirname, 'public'))); // папку public создадут другие

// ---- Routes ----
app.use('/', indexRoutes);
app.use('/', teamRoutes);

// ---- 404 fallback ----
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});
