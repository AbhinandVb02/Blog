const BlogData = require('../Model/BlogModel')

const BlogUpdate = async (req, res) => {
    const { id } = req.body;
    let newdata = {};

    if (req.body.Name) {
        newdata['Name'] = req.body.Name;
    }
    if (req.body.Catagories) {
        newdata['Catagories'] = req.body.Catagories;
    }
    if (req.body.Discription) {
        newdata['Discription'] = req.body.Discription;
    }
    if (req.body.Images) {
        newdata['Images'] = req.body.Images;
    }

    let filter = { _id: id };

    try {
        let update = await BlogData.findOneAndUpdate(filter, newdata, { new: true });

        if (update) {
            res.send({ message: 'Edit success', data: update });
        } else {
            res.send({ message: 'Error' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
}

module.exports = BlogUpdate;
