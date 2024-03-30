import { Schema, model, Document, Types, models, Model} from 'mongoose';

interface Property extends Document {
  _id: Schema.Types.ObjectId;
  owner: Types.ObjectId;
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

const PropertySchema = new Schema<Property>(
  {
    _id: { type:Schema.Types.ObjectId  }, // Define _id as a string type
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
  },
  {
    timestamps: true,
  }
);

const Property: Model<Property> =models.Property || model<Property>('Property', PropertySchema);

export default Property;
