import React from 'react'

class Scroll_76 extends React.Component {
    render() {
        return(
            <div style = {{overflow: "scroll", border: '1px solid black', height: '500px'}}>
                {this.props.children}
            </div>
        )
    }
}

export default Scroll_76;