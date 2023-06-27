const http = require('http');
const dotenv = require('dotenv');

const { app } = require('./server/app');

dotenv.config();

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
