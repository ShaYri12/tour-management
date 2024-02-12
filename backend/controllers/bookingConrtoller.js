import Booking from '../models/Booking.js'

//create new booking
export const createBooking = async (req, res) => {
    try {
      const { userId, userEmail, tourName, fullName, phone, guestSize, bookAt } = req.body;
  
      if (!userId || !userEmail || !tourName || !fullName || !phone || !guestSize || !bookAt) {
        return res.status(400).json({
          success: false,
          message: 'Please provide all required fields for booking.',
        });
      }
  
      const newBooking = new Booking({
        userId,
        userEmail,
        fullName,
        tourName,
        guestSize,
        phone,
        bookAt,
      });
  
      const savedBooking = await newBooking.save();
  
      res.status(200).json({
        success: true,
        message: 'Your tour is booked',
        data: savedBooking,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  };

//get all booking
export const getAllBooking = async(req, res) =>{
    try{
        const books = await Booking.find()

        res.status(200).json({
            success: true,
            message: "Successful",
            data: books,
        })
    }catch(error)
    {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
}

//get single booking
export const getBooking = async(req, res) =>{
    const _id = req.params.id;
    try{
        const book = await Booking.find({userId: _id})

        res.status(200).json({
            success: true,
            message: "Successful",
            data: book,
        })
    }catch(error)
    {
        res.status(404).json({
            success: false,
            message: "Not found",
        })
    }
}

// Delete a booking by ID
export const deleteBooking = async (req, res) => {
    try {
      const bookingId = req.params.id;
      
      const deletedBooking = await Booking.findByIdAndDelete(bookingId);
  
      if (!deletedBooking) {
        return res.status(404).json({
            success: false, 
            message: 'Booking not found'
        });
      }
  
      res.status(200).json({
        success: true,
        message: 'Booking deleted successfully'
        });

    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        success: false,
        message: 'Internal Server Error'
    });
    }
  };