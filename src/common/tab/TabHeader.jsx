import React from "react";
import { Component } from "react";

class TabHeader extends Component{
    render(){
        return(
          <li>
            <a href='javascript:;'
                data-toggles='tab'
                data-target={this.props.target}>
                <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}

                </a>
          </li>
        )
    }
}
export default TabHeader