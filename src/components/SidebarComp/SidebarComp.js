import React,{Component} from 'react';
import './SidebarComp.css';
import SidebarIcon from './SidebarIcon';
import SidebarContent from './SidebarContent';
class SidebarComp extends Component{

    state={
        open: false
    }
    sidebartoggle=()=>{
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render(){
        return(
            <div className="sidebar-container">
                <div className="sidebar-icon">
                    <SidebarIcon
                        sidebarOpen={this.state.open}
                        handleClick={this.sidebartoggle}
                    />
                </div>
                <SidebarContent isOpen = {this.state.open} onClick={this.sidebartoggle} />
            </div>
        )
    }
}

export default SidebarComp;