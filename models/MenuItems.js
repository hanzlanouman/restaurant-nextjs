import {mongoose, Shema} from 'mongoose';
const MenuItemsShema = new Shema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: 
        {
          url: { type: String, required: true },
          id: { type: String, required: true },
        },
});
const MenuItems = mongoose.models.MenuItems || mongoose.model('MenuItems', MenuItemsShema); 
export default MenuItems;