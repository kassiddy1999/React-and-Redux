import React from 'react'
const Ninjas = (props) => {
        const { ninjas } = props
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
            <div className= "ninja_list">
            { ninjas.map(ninja =>{
            return ninja.age > 24 ? (
                <div className = "ninja" key = {ninja.id} >
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