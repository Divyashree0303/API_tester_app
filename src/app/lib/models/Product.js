// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  organisation: { type: mongoose.Schema.Types.ObjectId, ref: 'Organisation',required:true},
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }]
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);
