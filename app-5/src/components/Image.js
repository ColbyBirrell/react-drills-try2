import React, { Component } from 'react'

class Image extends Component {

    render() {
        return (
            <div>
                <img src={this.props.url} />
                <p>^this is me today!</p>
            </div>
        )
    }

}

export default Image