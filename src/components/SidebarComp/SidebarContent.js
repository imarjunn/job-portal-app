import React,{Component} from 'react';
import {Transition} from 'react-transition-group';
import {NavLink} from 'react-router-dom';

const time = 300;

const sidebarStyle = {
    transition: `width ${time}ms`
}

const sidebarTransitionStyles = {
    entering: {width: 0},
    entered: {width: '200px'},
    exiting: {width: '200px'},
    exited: {width: 0}
}

const linkStyle = {
    transition: `opacity ${time}ms`
}

const linkTransitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 1},
    exiting: {opacity: 1},
    exited: {opacity: 0}
}

class SidebarContent extends Component{

    renderLinks = () => {
        return(
            <Transition in={this.props.isOpen} timeout={time}>
                {(state) => (
                    <div style={{
                        ...linkStyle,
                        ...linkTransitionStyles[state]
                    }}>
                        <div className="sidebar-link">
                            <NavLink to="/"><span>Home</span></NavLink>
                        </div>
                        <div className="sidebar-link">
                            <NavLink to="/contact"><span>Contact</span></NavLink>
                        </div>
                        <div className="sidebar-link">
                            <NavLink to="/jobpost"><span>PostJob</span></NavLink>
                        </div>
                    </div>
                )}
            </Transition>
        );
        }
    render(){
        return (
            <Transition in={this.props.isOpen} timeout={time}>
                {(state) =>(
                    <div className="sidebar" style={{
                        ...sidebarStyle,
                        ...sidebarTransitionStyles[state]
                    }}>
                    {this.renderLinks()}
                    </div>
                )}
            </Transition>
        );
    }
 }
                
export default SidebarContent;