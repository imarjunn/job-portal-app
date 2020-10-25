import React,{Component} from 'react';
import axios from '../../axios';
import './Portal.css';
import PortalJob from './PortalJob';

class Portal extends Component{

    state = {
        results: []
    }
    componentDidMount()
    {
        axios.get('/JobPortal.json')
            .then(res => {
                //console.log(res.data);
                const fetchedResults = []
                for(let key in res.data){
                    fetchedResults.unshift(
                        {
                        ...res.data[key],
                        id:key
                        }
                    )
                }
                this.setState({results: fetchedResults});
                //console.log(this.state.results);
            })
    }
    ///images/brandon-hall-VivsxaizzVE-unsplash-min.jpg
    render(){
        return(
            <>
            <div className="firstDiv">
                <div className="imageContainer">
                    <img className="w-full" src="https://imarjunn.github.io/job-portal-app/images/brandon-hall-VivsxaizzVE-unsplash-min.jpg" alt="bg-" />
                    <div className="container m-auto">
                        <div className="flex bg-white shadow-md -my-8 mb-16 mx-40 p-8 rounded z-10 relative">
                        </div>
                    </div>
                </div>
            
                <div className="secondDiv">
                    {
                        this.state.results.length === 0 ? (
                            <p>Jobs coming soon..</p>
                        ) : (
                            this.state.results.map((data,i) => (
                                <PortalJob 
                                    data = {data} 
                                    key={i}
                                    skills = {data.skills}   
                                />
                            ))
                        )
                    }
                </div>
            </div>
            </>
        );
    }
}

export default Portal;