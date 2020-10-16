import Company_76 from './Company'
import React from 'react'

class CompanyList_76 extends React.Component {
    render() {
        const CompanyComponents = this.props.logos.map((company) => {
            return (
                <Company_76 
                    key = {company.id}
                    name =  {company.name} 
                    founded = {company.founded} 
                    pic = {company.pic}
                />
            )
        });
        return (
            <div>{CompanyComponents}</div>
        )
    }
}
export default CompanyList_76;
