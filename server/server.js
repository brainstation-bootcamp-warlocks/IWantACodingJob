const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const port = 8080;

app.use(cors());
app.use(express.json());

let items = [];

app.get('https://localhost:8080/', (req, res) => {
  res.json(data);
  items.push(data);
});

app.post('https://localhost:8080/${id}', (req, res) => {
  console.log(req.body);
  const { title, content } = req.body;

  items.push({
    id: uuidv4(),
    title,
    content
  });

  res.json(items);
});

app.delete('https://localhost:8080/${id}', (req, res) => {
  const {
    params: {
      id
    }
  } = req;

  items = items.filter(({ id: toDoId }) => id !== toDoId);
  return res.json(items);
});

app.listen(port, () => console.log(`Listening on ${port}`));














