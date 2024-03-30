import { Schema, model, Document, Types, Model } from 'mongoose';

// Interface for Property document
export interface Property extends Document {
  owner: Types.ObjectId; // Reference to User schema
  name: string;
  type: string;
  description?: string;
  location: {
    street?: string;
    city?: string;
    state?: string;
    zipcode?: string;
  };
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: {
    nightly?: number;
    weekly?: number;
    monthly?: number;
  };
  seller_info: {
    name?: string;
    email?: string;
    phone?: string;
  };
  images: string[];
  is_featured: boolean;
}

// Define Property schema
const propertySchema = new Schema<Property>({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: String,
  location: {
    street: String,
    city: String,
    state: String,
    zipcode: String,
  },
  beds: {
    type: Number,
    required: true,
  },
  baths: {
    type: Number,
    required: true,
  },
  square_feet: {
    type: Number,
    required: true,
  },
  amenities: [String],
  rates: {
    nightly: Number,
    weekly: Number,
    monthly: Number,
  },
  seller_info: {
    name: String,
    email: String,
    phone: String,
  },
  images: [String],
  is_featured: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create a model using the schema
let PropertyModel: Model<Property>;

try {
  // Try to retrieve the existing model
  PropertyModel = model<Property>('Property');
} catch (error) {
  // If the model doesn't exist, define it
  PropertyModel = model<Property>('Property', propertySchema);
}
export default PropertyModel;
