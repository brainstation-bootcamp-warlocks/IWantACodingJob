const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());

let items = [];

app.get('https://localhost:5000/', (req, res) => {
  res.json(data);
  items.push(data);
});

app.post('https://localhost:5000/${id}', (req, res) => {
  console.log(req.body);
  const { title, content } = req.body;

  items.push({
    id: uuidv4(),
    title,
    content
  });

  res.json(items);
});

app.delete('https://localhost:5000/${id}', (req, res) => {
  const {
    params: {
      id
    }
  } = req;

  itmes = items.filter(({ id: toDoId }) => id !== toDoId);
  return res.json(items);
});

app.listen(port, () => console.log(`Listening on ${port}`));
