const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: Number,
        default: '0'
    }
}, {
    timestamps: true
});

const User = mongoose.model('user', userSchema);




const eventSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
     
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
     
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    selectedEvent: {
      type: String,
      required: true,
    //   enum: ['Wedding', 'Conference', 'Birthday', 'Anniversary'],
    },
    option: {
      type: String,
      trim: true,
    //   enum: ['Yes', 'No'],
    },
    maleName: {
      type: String,
      trim: true,
    },
    femaleName: {
      type: String,
      trim: true,
    },
    birthdayBoyName:{
      type: String,
      trim:true,
    }
  }, { timestamps: true });

  const Event = mongoose.model('event',eventSchema);



  const contactFormSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
     
    },
    phone: {
      type: String,
      required: true,
      trim: true,
     
    },
    message: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  const ContactForm = mongoose.model('ContactForm', contactFormSchema);


module.exports = {User,Event, ContactForm};
