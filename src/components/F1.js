
import Axios from "axios";
import {useEffect, useState} from "react";

function F1()
{
    //creating a react state
	
	const [data,setData] = useState([]);

    //HTTP request we need to place inside the lifecycle methods
    //But as we are working with function component there is no lifecycle methods
    //Instead we have the concept called Hooks which helps us to handle the HTTP req
    //useEffect() is used to handle the side Effects

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status === 200) //200 - OK
            {
               setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[])
    //for react list
   
	const ListNames = () => {
		return data.map((val)=>{
	return <h1>{val.name}</h1>
})
}
    return(
        <div>
            <h1>Hello</h1>
		 {ListNames()}
        </div>
    )
}

export default F1;
