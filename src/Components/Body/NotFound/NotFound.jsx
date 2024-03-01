import { useEffect } from "react";

const NotFound = ({prev}) => {
    useEffect(() => {
        prev(5);
    });
    return ( 
        <div className="not-found flex justify-center items-center w-full h-full">
            <h1> 404 Not Found </h1>
        </div>
     );
}
 
export default NotFound;