import react from 'react'

export const greetet= (props)=> {
    const{first, last} = props;
    return(
        <h1>
            hello, {first} {last}
        </h1>
    );
}