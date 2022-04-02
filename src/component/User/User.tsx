import { Component } from 'react';
import { IUser } from '../../model/listOfRepo.model'
import "./User.css"

interface UserProps {
    user: IUser;
}

export default class User extends Component<UserProps> {
    render() {
        return (
            <div className='user-container'>
                <div>
                    <a target={'_blank'} href={this.props.user.html_url}>
                        <img className='user-image' src={this.props.user.avatar_url}/>
                        {this.props.user.login}
                    </a>
                </div>
            </div>
        )
    }
}