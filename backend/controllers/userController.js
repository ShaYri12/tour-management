import User from '../models/User.js'

//update
export const updateUser = async(req, res) =>{

    const id = req.params.id;

    try{
        const updatedUser = await User.findByIdAndUpdate(id,{
            $set: req.body
        }, {new:true})

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedUser,
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to update",
        });
    }
}

//delete
export const deleteUser = async(req, res) =>{
    const id = req.params.id;

    try{
        await User.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Successfully deleted",
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to delete",
        });
    }
}

//get Single User
export const getSingleUser = async(req, res) =>{
    const id = req.params.id;

    try{
        const user = await User.findById(id)

        res.status(200).json({
            success: true,
            message: "Successfully found",
            data: user,
        });
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: "Not found",
        });
    }
}

//get all Users
export const getAllUser = async(req, res) =>{

    try{
        const users = await User.find({role:'user'})

        res.status(200).json({
            success: true,
            count: users.length,
            message: "Successfully found Users",
            data: users,
        });
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: "Not found",
        });
    }
}

//get all Admins
export const getAllAdmins = async (req, res) => {
    try {
        const admins = await User.find({ role: 'admin' });

        res.status(200).json({
            success: true,
            count: admins.length,
            message: "Successfully found Admins",
            data: admins,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
