import { IUser } from '../model/listOfRepo.model'

export default function userMapping(user: any): IUser {
    return ({
        id: user.id,
        avatar_url: user.avatar_url,
        login: user.login,
        html_url: user.html_url,
    })
}
