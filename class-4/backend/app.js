import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("SAAS DEVELOPMENT")
});

app.get("/videos", (req, res) => {
    
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT: ${3000}`);
});

console.log("backend development");