const mongoose=require("mongoose");

const bestSellSchema=new mongoose.Schema(
    {
        name: String,
        description: String,
        price: Number,
        mrp: Number,
        discount: Number,
        category: String,
        stock: Number,
        brand: String,
        superSaver: Boolean,
        quantityType: String,
        season: String,
        country: String,
        photo: Array,
    },
    {timestamps:true}
);

const bestSell=mongoose.model("bestSS", bestSellSchema)
module.exports=bestSell;