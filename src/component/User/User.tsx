import { Component } from 'react';
import { IUser } from '../../model/listOfRepo.model'

interface UserProps {
    user: IUser;
}

export default class User extends Component<UserProps> {
    render() {
        return (
            <div>
                {this.props.user.login}
            </div>
        )
    }
}