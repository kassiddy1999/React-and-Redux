import React from 'react'
const Ninjas = (props) => {
    // functional component don't use 'this'
        const { ninjas } = props
    // alternative for outputting list
        // const ninjaList = ninjas.map(ninja =>{
        //     if (ninja.age> 24) {
        //     return(
        //     <div className = "ninja" key = { ninja.id } >
        //         <div>Name :{ ninja.name } </div>
        //         <div>Age :{ ninja.age } </div>
        //         <div>Belt : { ninja.belt }</div>
        //     </div>
        //     )
        //     }
        // })
        
        return(
     // map through the list, set a condition if pass, execute else don't show
            <div className= "ninja_list">
            { ninjas.map(ninja =>{
            return ninja.age > 24 ? (
                <div className = "ninja" key = { ninja.id } >
                <div> Name : { ninja.name }</div>
                <div> Age :{ ninja.age }</div>
                <div> Belt : { ninja.belt }</div>
                </div>
            ): null;
        })
     } 
            </div>
        )
    }

export default Ninjas