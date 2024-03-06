import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A Joke",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field.",
    },
    {
      id: 2,
      title: "Another Joke",
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 3,
      title: "Joke about a developer",
      content:
        "Once there was a developer who couldn’t get his code to work. So he decided to take a break and go for a walk",
    },
    {
      id: 4,
      title: "What do you call a fake noodle?",
      content: "An impasta.",
    },
  ];
  res.send(jokes)
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
