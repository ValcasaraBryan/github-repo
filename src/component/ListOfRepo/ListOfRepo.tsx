import { Component } from 'react';
import './ListOfRepo.css';
import { IRepo, IUser, IProject } from '../../model/listOfRepo.model'
import { get } from '../../services/fetch'
import { notification } from '../Notification/Notification'


interface ListOfRepoState {
    selected: string | null;
}

interface ListOfRepoProps {
    listOfRepo: IRepo[];
    user: IUser;
    onClick: (detailRepo: IProject) => any
}

export default class ListOfRepo extends Component<ListOfRepoProps, ListOfRepoState>{
    constructor(props: ListOfRepoProps) {
        super(props);
        this.state = {
            selected: null
        }
    }

    onPressDetail = async (user: IUser, detailRepo: IRepo) => {
        try {
            const res = await get('https://api.github.com/repos/' + user.login + '/' +  detailRepo.name)
            this.setState({ selected: detailRepo.id }, () => this.props.onClick(!res.id ? null : res))
        } catch (e) {
            notification.error("Une erreur est survenue lors de la récupération des données");
        }
    }

    render() {
        return (
            <div className='listOfRepo-container'>
                {this.props.listOfRepo.length === 0 &&
                    <>
                        <div>Aucun résultat</div>
                    </>
                }
                {this.props.listOfRepo.length > 0 &&
                    <>
                        {this.props.listOfRepo.map((repo: IRepo, index: number) => {
                            return (
                                <div
                                    key={`${index}`}
                                    className={`${this.state.selected === repo.id ? "active" : ""}`}
                                    onClick={() => this.onPressDetail(this.props.user, repo)}>
                                    {repo.name}
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        )
    }
}