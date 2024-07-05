import express from 'express';
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(8085,()=>{
    console.log('Started');
})