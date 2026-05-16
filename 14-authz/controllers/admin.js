import User from "../models/User.js";

export const handleDeleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        if (req.user && req.user.userId === id) {
            return res.status(400).json({
                success: false,
                message: "You cannot delete your own admin account.",
            });
        }

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        return res.status(200).json({
            success: true,
            message: `User ${deletedUser.email || id} has been successfully deleted.`,
            data: { id: deletedUser._id },
        });
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                success: false,
                message: "Invalid User ID format.",
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error occurred while deleting the user.",
        });
    }
};
