import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  id: Number,
  name: String,
});

const User = models.User || model("User", UserSchema);

export default User;