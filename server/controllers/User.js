import { uploadFiles } from "../middlewares/upload";
import Address from "../models/Address"; // Corrected spelling of Address
import User from "../models/User";


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