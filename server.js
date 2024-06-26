// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const authRoutes = require('./Routes/authRoute');
const reviewRoutes = require('./Routes/reviewRouter');
const userRoutes = require('./Routes/registerRouter');
const tourRoutes = require('./Routes/tourRouter');
const organizerRotes = require('./Routes/organizerRoute');
const bookingRouters = require('./Routes/bookingRoutes');
const favouritRouters = require('./Routes/favoriteRoutes');
const subscribeRoutes = require('./Routes/subscribeRoute');
const sendEmail = require('./Routes/sendmailwithAPIDocumentionRouter');
const customService = require('./Routes/CustomServiceRoutes')
const couponOffer = require('./Routes/couponRoute')
const contactUs = require('./Routes/contactUsRoute');
const excelReport = require('./Routes/excelReportRoutes')

//add comment

// Create Express app
const app = express();
app.use(cors());

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//
// mongoose.connect('mongodb://localhost:27017/Trolli', {

mongoose.connect('mongodb+srv://adamosama9080:LwiTF7hNYOvwMRyF@finalcluster.hqiaycn.mongodb.net/Trolli?retryWrites=true&w=majority&appName=FinalCluster/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use authentication routes
app.use('/auth', authRoutes);
app.use('/register', userRoutes);
app.use('/reviews', reviewRoutes);
app.use('/tours', tourRoutes);
app.use('/organizers', organizerRotes);
app.use('/booking',bookingRouters)
app.use("/favourits", favouritRouters);
app.use('/send', subscribeRoutes);
app.use('/sendmail', sendEmail);
app.use('/customservice', customService);
app.use('/coupon', couponOffer);
app.use('/contact', contactUs);
app.use('/report', excelReport);

// Start server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


