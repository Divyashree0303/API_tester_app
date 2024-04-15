// models/Service.js
import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  apis: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Api' }]
});

export default mongoose.models.Service || mongoose.model('Service', serviceSchema);
