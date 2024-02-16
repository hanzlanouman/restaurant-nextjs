import MenuItems from "@/models/MenuItems";
import { NextResponse } from "next/server";

const POST=async()=>{
    const {name,price,category}=req.body;
    await ConnectMongoDB();
    await MenuItems.create({name,price,category});
    return NextResponse.json({message:'Menu Item Created'});
}