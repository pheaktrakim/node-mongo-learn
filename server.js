const mongoose = require('mongoose');
const app = require('./app');

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION)

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
