import ConnectMongoDB from "@/lib/MongoDB";
import MenuItem from "@/models/MenuItems";
import { NextResponse } from "next/server";

const PUT = async (req, {params}) => {   
    const {id} = params;
    const {newtitle: title,newdescription:description,newprice: price,newimage:image}= await req.json();
    await ConnectMongoDB();
    await MenuItem.findByIdAndUpdate
    (id,{title,description,price,image});
    return NextResponse.json({message:'Menu Item Updated'});
}
const GET = async () => {
    const {id}=params;
    await ConnectMongoDB();
    const MenuItem = await MenuItems.find({_id:id});
    return NextResponse.json(menuItems);
}
export default {
    PUT,
    GET
}