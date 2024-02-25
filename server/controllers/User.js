import Address from "../models/Address.js"; // Corrected spelling of Address
import User from "../models/User.js";
import Product from "../models/Product.js"
export const updateUserDetail = async (req, res) => {
    try {
        const userId = req.user.id;
        const { name, address } = req.body;

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            });
        }

        // Update user's name if provided
        if (name) {
            user.name = name;
            await user.save();
        }

        // Update user's addresses if provided
        if (address)
            await Address.findByIdAndUpdate(address._id, address, { new: true });


        // Save the updated user

        return res.status(200).json({
            message: 'User updated successfully'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Internal server error'
        });
    }
};


export const updateDisplayPicture = async () => {
    try {
        const userId = req.user.id


        const updatedProfile = await User.findByIdAndUpdate(
            { _id: userId },
            { image: image.secure_url },
            { new: true }
        )

        if (!updatedProfile) {
            return res.status(404).json({
                success: false,
                message: "could not updated image"
            })
        }
        return res.status(200).json({
            status: true,
            message: "user dispaly image updated"
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Internal server error while updating picture'
        });
    }
}


export const getAllCustomerWithProducts = async (req, res) => {
    try {
     
        const users = await User.find({ role: 'customer' }) 

        const usersWithProducts = [];

        for (const user of users) {
            const products = await Product.find({ ownerId: user._id });

       
            usersWithProducts.push({
                user,
                products
            });
        }

        res.status(200).json(usersWithProducts);
    } catch (error) {
     
        console.error('Error while getting all customers with products:', error);
        res.status(500).json({ message: 'Failed to get users with products.' });
    }
}

export const getCurrentUser = async (req, res) => {
    try{

    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Failed to get users with products.' });
    }
}