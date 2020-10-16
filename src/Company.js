import React from 'react';

class Company_76 extends React.Component {
    render() {
        return(
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img src = {this.props.pic} width = "150"/>
                <h2>{this.props.name}</h2>
                <p>founded year: {this.props.founded}</p>
            </div>
        );
    };
}

export default Company_76;