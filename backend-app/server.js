import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send("server is running");
})

app.get('/twitter', (req, res) => {
    res.json({
        message: "this is twitter route"
    })
})

app.get('/youtube', (req, res) => {
    res.json({
        message: "this is youtube route"
    })
})

const githubData = {
  "login": "mayurch25",
  "id": 100030651,
  "node_id": "U_kgDOBfZYuw",
  "avatar_url": "https://avatars.githubusercontent.com/u/100030651?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mayurch25",
  "html_url": "https://github.com/mayurch25",
  "followers_url": "https://api.github.com/users/mayurch25/followers",
  "following_url": "https://api.github.com/users/mayurch25/following{/other_user}",
  "gists_url": "https://api.github.com/users/mayurch25/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mayurch25/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mayurch25/subscriptions",
  "organizations_url": "https://api.github.com/users/mayurch25/orgs",
  "repos_url": "https://api.github.com/users/mayurch25/repos",
  "events_url": "https://api.github.com/users/mayurch25/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mayurch25/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-02-19T13:40:41Z",
  "updated_at": "2026-03-31T10:37:55Z"
}

const jokesData = [
  {
    id: 1,
    title: "Why don't scientists trust atoms?",
    answer: "Because they make up everything!"
  },
  {
    id: 2,
    title: "Why did the bicycle fall over?",
    answer: "Because it was two-tired!"
  },
  {
    id: 3,
    title: "Why can't your nose be 12 inches long?",
    answer: "Because then it would be a foot!"
  },
  {
    id: 4,
    title: "What do you call fake spaghetti?",
    answer: "An impasta!"
  },
  {
    id: 5,
    title: "Why did the scarecrow win an award?",
    answer: "Because he was outstanding in his field!"
  },
  {
    id: 6,
    title: "Why don’t programmers like nature?",
    answer: "Too many bugs."
  },
  {
    id: 7,
    title: "How do you comfort a JavaScript bug?",
    answer: "You console it."
  },
  {
    id: 8,
    title: "Why did the developer go broke?",
    answer: "Because he used up all his cache."
  },
  {
    id: 9,
    title: "Why do Java developers wear glasses?",
    answer: "Because they don’t C#."
  },
  {
    id: 10,
    title: "Why was the computer cold?",
    answer: "Because it left its Windows open."
  }
];

app.get('/jokes', (req, res) => {
  res.json(jokesData);
})

app.get('/github', (req, res) => {
    res.json(githubData);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log(`server is running at http://localhost:${PORT}`);
})