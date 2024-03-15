import mongoose from 'mongoose';

const { Schema } = mongoose;

const emailSubscriptionSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const EmailModel = mongoose.model('EmailSubscription', emailSubscriptionSchema);

export default EmailModel;
