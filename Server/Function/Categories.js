const BlogData = require('../Model/BlogModel')

const FilterCatagories = async(req,res)=>{

   const {Catagories} = req.params;
   const data = await BlogData.find({Catagories:Catagories})
   res.json(data) 

}

module.exports = FilterCatagories;