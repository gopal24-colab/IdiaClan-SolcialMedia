const app = require("./app");
const PORT = process.env.PORT || 3001;

const connectDb = require("./database/ConnectDB");

app.listen(PORT, () => {
  (async () => {
    connectDb();
  })();
  console.log(`Server running at http://localhost:${PORT}`);
});
