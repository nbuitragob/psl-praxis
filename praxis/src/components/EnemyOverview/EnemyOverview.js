import React, { Component } from 'react';
import './EnemyOverview.css';

class EnemyOverview extends Component {
    render() {
        return (<div className='enemy-overview-container'>
            <img src={this.props.image} alt={this.props.name} />
            <h1><a href={this.props.link}>{this.props.name}</a></h1>
            <p className='enemy-overview-text'>{this.props.overview}</p>
            <a href={this.props.link}>More info..</a>
        </div>);
    }
}

export default EnemyOverview;
