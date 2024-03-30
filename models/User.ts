import { Schema, model, Document, Types } from 'mongoose';

// Interface for User document
interface User extends Document {
  email: string;
  username: string;
  image?: string;
  message: string;
  bookmark: Types.ObjectId; // Reference to Bookmark schema
}

// Define User schema
const userSchema = new Schema<User>({
  email: {
    type: String,
    unique: true, // Ensure emails are unique
    required: [true, "Email is required"]
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  image: String, // Image URL (assuming you'll store the image URL as a string)
  message: {
    type: String,
    required: [true, "Message is required"],
  },
  bookmark: {
    type: Schema.Types.ObjectId,
    ref: 'Property'
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

// Create a model using the schema
const UserModel = model<User>('User', userSchema);

export default UserModel;
