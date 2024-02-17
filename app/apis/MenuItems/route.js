import MenuItem from "@/models/MenuItems";
import { NextResponse } from "next/server";
import ConnectMongoDB from "@/lib/MongoDB";

export const POST=async(req)=>{
    const {title,price,description, image}= await req.json();
    await ConnectMongoDB();
    await MenuItem.create({title,price,description,image});
    return NextResponse.json({message:'Menu Item Created'});
}

export const GET=async()=>{
    await ConnectMongoDB();
    const MenuItems =await MenuItem.find({});
    return NextResponse.json(MenuItems);
}

export const Delete=async(req)=>{
    const id= req.nextUrl.searchParams.get("id");
    await ConnectMongoDB();
    await MenuItem.findByIdAndDelete(id);
    return NextResponse.json({message:'Menu Item Deleted'});
}

