const Product = require("../models/product");

const getAllProducts =async (req, res)=>{
    
   const { company,name,price,featured,rating,sort } =req.query;
   const queryObject ={};

   if(company){
    queryObject.company =company;   
   }

   if(name){
    queryObject.name ={ $regex: name, $options:"i" };
   }

   if(price){
    queryObject.price =price;   
   }
   if(featured){
    queryObject.featured =featured;   
   }
   if(rating){
    queryObject.rating =rating;   
   }
  
   let apiData = Product.find(queryObject);

   if(sort){
    let sortFix = sort.replace(",", " ");
    apiData =apiData.sort(sortFix);
   }

   let page = Number(req.query.page) || 1;
   let limit = Number(req.query.limit) || 3;
   let skip = (page - 1)*limit;
   apiData = apiData.skip(skip).limit(limit);
   
   console.log(queryObject);

    const myData =await apiData;
    res.status(200).json({ myData, nbHits: myData.length });
};

const getAllProductsTesting =async (req, res)=>{
    const myDataTesting =await Product.find(req.query).sort("-name");
    res.status(200).json({ myDataTesting });
};

module.exports = {getAllProducts, getAllProductsTesting}; 