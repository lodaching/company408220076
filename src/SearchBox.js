import React from 'react'

class SearchBox_76 extends React.Component {
    render() {
        return(
            <div className = 'pa2'>
                <input
                    className = 'pa3 ba b--green bg-lightest-blue'
                    type = 'search'
                    placeholder = 'search companies'
                    onChange = {this.props.searchChange}
                />
            </div>
        )
    }
}

export default SearchBox_76;