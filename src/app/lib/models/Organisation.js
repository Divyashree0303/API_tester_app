// models/Organization.js
import mongoose from 'mongoose';

const organisationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  orgType: {
    type: String,
    enum: ['Corporation','Non-profit','Government']
  },
  description: {
    type: String
  },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

export default mongoose.models.Organisation || mongoose.model('Organisation', organisationSchema);
