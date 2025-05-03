const ProModel = require("../Model/ProModel");


const InsertProduct = async(req,res)=>{
    // console.log(req.body);
    // console.log(req.files);
    const imageUrls=req.files.map(file=>file.path);
    const { name, brand, price} = req.body;
    try {
        const Product = await ProModel.create({
            name:name,
            brand:brand,
            price:price,
            defaultImage:imageUrls[0],
            image:imageUrls
        })
        res.status(200).send({msg:"Product are Succefully Added"});
    } catch (error) {
        console.log(error);
    }

    res.send("okk");
}

module.exports = {
    InsertProduct
}