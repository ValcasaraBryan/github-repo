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
                {this.props.user.login}
            </div>
        )
    }
}