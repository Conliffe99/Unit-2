const express = require (`express`);
const app = express();
const PORT = 3000;

app.get(`/greeting/:name`, (req, res) => {
    res.send(`Hello, father ${req.params.name}`)
});

app.get(`/tip/:total/:tipPercentage`, (req,res) => {
})

app.listen(PORT, () => {
    console.log(`listening on port 3000`)
})