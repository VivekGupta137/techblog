import { Copy } from "lucide-react";

const CopyButton = () => {
    return ( <div className="p-2 text-muted-foreground hover:text-primary cursor-pointer">
        <Copy size={15} />
    </div> );
}
 
export default CopyButton;