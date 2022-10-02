const express=require("express")
const app=express();
const cors=require("cors")

app.use(cors({origin:'*'}));
app.use(express.json());

const PORT=8080;

app.get("/", async(req,res)=>{
    res.status(200).send("Namaste Dosto!")
})

app.listen(PORT, async()=>{
    console.log(`connected at http://localhost:${PORT}`)
})
