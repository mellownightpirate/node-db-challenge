const server = require("./server");

const PORT = process.env.PORT || 7777;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});