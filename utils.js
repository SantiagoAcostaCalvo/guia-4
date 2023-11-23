export function getImageUrl(person,size='s'){
    return (
        'https://i.imgur.com/'+
        person.imageId +
         size +
        '.jpg'
    
    )
}
import React from "react";

import { getImageUrl } from "./utils.js";

function Avatar({ person, size }) {
return (
<img
className="avatar"
src={getImageUrl(person)}
alt={person.name}
width={size}
height={size}
/>
  );

}
export defult function profile(){
    return(
        <>
        <div className="card">
        <Avatar size={100}
        person={{ name: "katsuko Saruhashi", imageId: "Yfe0qp2",}}
        />{""}
        </div>
        <div className="card">
            <Avatar size={80}
            person={{ name: "aklilu lemma", imageId:"0ks67lh",}}
            />{""}
            </div>
            <div className="card">
                <Avatar size={50} person={{ name: "lin lanying", imageId: "1bX5QH6",}}
                />
                </div>
            </>
    )
}

import "./App.css";
import profile from "./components/Avatar"

function App(){
    return(<profile/>
    );
}

export default App; 