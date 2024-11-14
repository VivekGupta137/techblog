import { contentsData } from "@/constants/contents";
import { redirect } from "next/navigation";

const Page = () => {    
    redirect(contentsData.filter((content) => content.title.toLowerCase() === "react")[0].children[0].child[0].url);
}
 
export default Page;