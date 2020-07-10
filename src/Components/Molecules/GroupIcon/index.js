import React, { Component } from 'react';
import Icon from '../../Atoms/Icon';
class GroupIcon extends Component {
    
renderIcon=()=>{
    const {data}= this.props;
    return data.map((item, idx)=> 
    <Icon key={idx} className={item.iconClassName} href={item.iconHref}>
        {item.icon}
    </Icon>)
}
    render() {
		return (
			<div className={this.props.classGroupIcon}>
                {this.renderIcon()}
            </div>
		)
	}
}

export default GroupIcon;