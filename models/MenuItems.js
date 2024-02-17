import { mongoose, Schema } from 'mongoose';
const MenuItemsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const MenuItem =
  mongoose.models.MenuItem || mongoose.model('MenuItem', MenuItemsSchema);
export default MenuItem;

// mongoose.models.MenuItem ||
