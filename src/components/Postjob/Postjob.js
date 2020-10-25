import React,{Component} from 'react';
import './Postjob.css';
import data from './FormData/FormData.json';
import { storage } from '../../firebase';
import axios from '../../axios';

class Postjob extends Component {

 constructor(props){
    super(props);
    this.state={
      position: data[0].position,
      role: data[1].role,
      Contract:data[2].Contract,
      location:data[3].location,
      image: null,
      url: "",
      formId: "",
      formCompanyName: "",
      formPosition: "",
      formRole: "",
      formContract: "",
      formLocation:"",
      skills: ""
    };
  }

  postDataHandler = (e) => {
    e.preventDefault();

    let skillsarr = [];
    skillsarr = this.state.skills.split(",");

    const Data = {
      url: this.state.url,
      formId: this.state.formId,
      formCompanyName:this.state.formCompanyName,
      formPosition:this.state.formPosition,
      formRole:this.state.formRole,
      formContract:this.state.formContract,
      formLocation: this.state.formLocation,
      skills: skillsarr
    }
    axios.post('/JobPortal.json', Data)
            .then(response => {
                console.log(response);
            })
    
  }

  handleChange = e => {
    if(e.target.files[0]){
      const image = e.target.files[0];
      this.setState(() => ({ image }));
      //setImage(e.target.files[0]);
      console.log(this.state.image);
    }
  };

  handleUpload = (e) => {
    e.preventDefault();
    const {image} = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    console.log(uploadTask);
    uploadTask.on(
      "state_changed",
      snapshot => {
        
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
           // console.log(url);
           this.setState({url});
           //setUrl(url);
          });
      }
    )
  };
      //console.log(this.state.role[0].roleDesc);
      render(){
        return(
        <>
        <div className="items-center h-screen m-auto bg-teal-lighter">
          <div className="text-Black pb-16 relative ml-4">
            <h1 className="font-Aileron absolute bottom-0 text-2xl tracking-tight border-b-2 border-gray-600">FILL FORM TO POST JOBS :</h1>
          </div>
          <div className="w-full bg-white rounded shadow-lg p-8 m-4">
            <form className="m-auto w-full max-w-lg" onSubmit={this.postDataHandler}>
              <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    JOB ID
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="ID" onChange={(e)=> this.setState({formId: e.target.value})} />
                </div>
              </div>
              <div className="flex flex-wrap mb-6">
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Company Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" onChange={(e)=> this.setState({formCompanyName: e.target.value})} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    UPLOAD COMPANY LOGO:
                  </label>
                  <input type="file" onChange={this.handleChange} />
                  <button 
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                      onClick={this.handleUpload} >
                     UPLOAD
                  </button>
                </div>
              </div>
              <div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                    Position
                  </label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e)=> this.setState({formPosition: e.target.value})}>
                    {this.state.position.map((position,index) => <option key={index}>{position.posDesc}</option>)
                      }
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    ROLE
                  </label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e)=> this.setState({formRole: e.target.value})}>
                    {this.state.role.map((role,index) => <option key={index}>{role.roleDesc}</option>)
                      }
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                    Contract
                  </label>
                  <div className="relative">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e)=> this.setState({formContract: e.target.value})}>
                    {this.state.Contract.map((Contract,index) => <option key={index}>{Contract.contractDesc}</option>)
                      }
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                    </div>
                </div>
                </div>
                <div className="flex mt-5">
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                    Location
                  </label>
                  <div className="relative">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e)=> this.setState({formLocation: e.target.value})}>
                    {this.state.location.map((location,index) => <option key={index}>{location.locDesc}</option>)
                      }
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                    </div>
                  </div>
                  <div className="w-full  ml-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                      Skills(Separate by <i>commas</i>)
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="place required skills here" onChange={(e)=> this.setState({skills: e.target.value})} />
                </div>
                </div>
                </div>
                <div className="flex justify-center m-auto mt-4 content-center">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Submit
                </button>
                </div>
            </form>
          </div>
        </div>
        </>
        );
    }
}

export default Postjob;

