import MenuItems from "@/models/MenuItems";
import { NextResponse } from "next/server";
import ConnectMongoDB from "@/lib/MongoDB";

const POST=async(req)=>{
    const {name,price,category}= await req.json();
    await ConnectMongoDB();
    await MenuItems.create({name,price,category});
    return NextResponse.json({message:'Menu Item Created'});
}

const GET=async()=>{
    await ConnectMongoDB();
    const menuItems=await MenuItems.find({});
    return NextResponse.json(menuItems);
}

const Delete=async(req)=>{
    const id= req.nextUrl.searchParams.get("id");
    await ConnectMongoDB();
    await MenuItems.findByIdAndDelete(id);
    return NextResponse.json({message:'Menu Item Deleted'});
}

export default {
    POST,
    GET
}