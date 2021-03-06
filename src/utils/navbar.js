import Home from "../components/Home"
import Generic from "../pages/Generic"



export const navbar =[
    {
        id:1,
        title:"Home",
        path:"/home",
        element:<Home/>,
        search:"?",
        hidden:false,
        private:false,
    },
    {
        id:2,
        title:"Property",
        path:"/property",
        element:<Generic/>,
        search:"?",
        hidden:false,
        private:false,
    },
    {
        id:1,
        title:"Contacts",
        path:"/contacts",
        element:<Generic/>,
        search:"?",
        hidden:false,
        private:false,
    }
]