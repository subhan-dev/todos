import React, { Component } from 'react'
import {connect} from 'react-redux'

class EditProfile extends Component {
    onButtonClick = (userid) => {
        
        
    }

    render() {
        return (
                <div>
                    <div className='custom-file'>
                        <input type='file'/>
                    </div>

                    <button
                        className='btn btn-primary'
                        onClick={() => {this.onButtonClick(this.props.userid)}}
                    >Update Photo</button>
                </div>

        )
    }
}

const mps = state => {
    return {
        userid: state.auth.id
    }
}

export default connect(mps)(EditProfile)