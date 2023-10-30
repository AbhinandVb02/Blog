const express = require("express");
const userGen = require("../Function/UserSignIn");
const userlogfun = require("../Function/Userlogin");
const Userdata = require("../Function/Userdata");
const CreateBlog = require("../Function/CreateBlog");
const GetBlogdata = require("../Function/GetBlogdata");
const GetBlogdatabyId = require("../Function/GetBlogById");
const DeleteBlog = require("../Function/BlogDelete");
const FilterCatagories = require("../Function/Categories");
const BlogUpdate = require("../Function/UpdateBlog");


const router = express.Router();

router.route('/user').post(userGen)
router.route('/login').post(userlogfun)
router.route('/userdata').post(Userdata)
router.route('/addblog').post(CreateBlog)
router.route('/getblog').get(GetBlogdata)
router.route('/getblogbyid/:id').get(GetBlogdatabyId)
router.route('/deleteblog').post(DeleteBlog)
router.route('/update').post(BlogUpdate)
router.route('/userdata/:Catagories').get(FilterCatagories)


module.exports = router;