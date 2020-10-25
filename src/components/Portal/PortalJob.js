import React,{ Component } from 'react';

class PortalJob extends Component{
    render(){
        //console.log(this.props.skills);
        return(
            <div className="flex flex-col bg-white shadow-md my-16 mx-16 p-6 rounded 
                             border-l-4 border-teal-400 border-solid lg:flex-row lg:my-4" >
                <div>
                    <img className="-mt-16 mb-4 w-20 h-20 lg:h-24 lg:w-24 lg:my-0" src={this.props.data.url} alt={this.props.data.formCompanyName} />
                </div>
                <div className="flex flex-col justify-between ml-4">
                    <h3 className="font-bold text-teal-500">
                        {this.props.data.formCompanyName} 
                    </h3>
                    <h2 className="font-bold text-xl my-2">{this.props.data.formPosition}</h2>
                    <p className="text-gray-700">{this.props.data.formId} · {this.props.data.formContract} · {this.props.data.formLocation}</p>
                </div>

                <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0">
                {
                         this.props.skills.map((tags,index) => 
                                <span
                                    key={index}
                                    className="cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded lg:mb-0">{tags}
                                </span>
                         )
                }
                </div>                     
            </div>
     
        )
    }
}

export default PortalJob;