import { useEffect , useState } from "react";

interface Post {
    id:number;
    title:string;
    body:string;
}

const API_URL ="https://jsonplaceholder.typicode.com/posts";

const DemoConsumo: React.FC = () => {
    const [posts,setPosts]=useState<Post[]>([]);
    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) =>setPosts(data.slice(0,5))) //Tomamos solo 5
        .catch((error)=>console.error("Error:",error))
    },[]);
    return(
        <div>
            <h1>Publicaciones</h1>
            {posts.map((post)=> (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>    
            ))}
        </div>
    );
};
export default DemoConsumo;