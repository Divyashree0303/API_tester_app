// models/Api.js
import mongoose from 'mongoose';

const apiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  method: {
    type: String,
    enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    required: true
  },
  url: {
    type: String,
    required: true
  },
  requestBody: {
    type: {
      type: String,
      enum: ['raw', 'formdata']
    },
    formDataParams: [
      {
        key: {
          type: String,
          required: true
        },
        value: {
          type: String,
          required: true
        },
        type: {
          type: String,
          enum: ['Text', 'File'],
          required: true
        }
      }
    ],
    rawBody: {
      type: String
    }
  },
  params: [
    {
      key: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      }
    }
  ],
  headers: [
    {
      key: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      }
    }
  ],
  authType: {
    type: String,
    enum: ['None', 'Basic', 'OAuth2.0'],
    default: 'None'
  },
  authCredentials: {
    username: {
      type: String
    },
    password: {
      type: String
    },
    accessToken: {
      type: String
    }
  },
  response: {
    status: {
      type: Number
    },
    data: {
      type: mongoose.Schema.Types.Mixed
    }
  }
  // Add other properties as needed
});

export default mongoose.models.Api || mongoose.model('Api', apiSchema);
