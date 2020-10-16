import React from 'react'
import CompanyList_76 from './CompanyList'
import SearchBox_76 from './SearchBox'
import {logos} from './logos'
import Scroll_76 from './Scroll'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logos: logos,
            searchfield: '',
        };
    }

    onSearchChange = event => {
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filteredCompanies = this.state.logos.filter(company => {
            return company.name.toLowerCase()
                    .includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className = 'tc'>
                <h1>Company Logo</h1>
                <SearchBox_76 searchChange = {this.onSearchChange}/>
                <Scroll_76>
                    <CompanyList_76 logos = {filteredCompanies}/>
                </Scroll_76>
            </div>
        )
    }
}

export default App;
