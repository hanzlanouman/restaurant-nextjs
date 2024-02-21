import ConnectMongoDB from '@/lib/MongoDB';
import MenuItem from '@/models/MenuItems';
import { NextResponse } from 'next/server';

export const PUT = async (req, { params }) => {
  const { id } = params;
  const {
    newtitle: title,
    newdescription: description,
    newprice: price,
    newimage: image,
  } = await req.json();
  console.log('ID', id);
  await ConnectMongoDB();
  await MenuItem.findByIdAndUpdate(id, { title, description, price, image });
  return NextResponse.json({ message: 'Menu Item Updated' });
};
export const GET = async (req, { params }) => {
  const { id } = params;
  await ConnectMongoDB();
  const menuItems = await MenuItem.find({ _id: id });
  return NextResponse.json({ menuItems });
};
export const POST = async (req, { params }) => {
  const { id } = params;
  console.log('ID', _id);
  const { title, description, price, image } = await req.json();
  await ConnectMongoDB();
  const result = await MenuItem.updateOne(
    { _id: id },
    { $set: { title, description, price, image } }
  );
  if (result.modifiedCount === 0) {
    throw new Error('No document found with the provided id.');
  }
  return NextResponse.json({ message: 'Menu Item Updated' });
};
