const app = require('./app');
const port = process.env.PORT || 5000;
const connectToDB = require('./utils/database');

connectToDB();


app.listen(port, () => {
    console.log(`Interactive Note app is running on port ${port}`);
});
  