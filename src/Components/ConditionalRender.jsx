import React from 'react'

export default class ConditionalRender extends React.PureComponent {
    state={
        isLoggedIn:true
    }
    render() {
    //     if(this.state.isLoggedIn){
    //         return(
    //             <div>
    //                 Welcome Mohit
    //             </div>
    //         )
    //     }
    //     else{
    //         return(
    //             <div>
    //                 Welcome Guest
    //             </div>
    //         )

    //     }
    // }
    return(
        // this.state.isLoggedIn?<div>Welcome Mohit</div>:<div>Welcome Guest</div>
        this.state.isLoggedIn && <div>Welcome Mohit</div>
    )
    }
}
