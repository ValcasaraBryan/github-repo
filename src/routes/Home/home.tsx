import { Component } from 'react';
import Header from '../../component/Header/header';
import Search from '../../component/Search/search';
import ListOfRepo from '../../component/ListOfRepo/ListOfRepo';
import listOfRepoMapping from '../../mapping/listOfRepo.mapping';
import userMapping from '../../mapping/userMapping.mapping';
import detailRepoMapping from '../../mapping/detailRepo.mapping';
import DetailRepo from '../../component/DetailRepo/DetailRepo';
import User from '../../component/User/User';
import { IRepo, IUser, IProject } from '../../model/listOfRepo.model'
import './home.css';

interface HomeScreenState {
    listOfRepo: IRepo[]
    searched: boolean;
    detailRepo: IProject | null
    user: IUser | null
}
export default class HomeScreen extends Component<any, HomeScreenState> {
    constructor(props: any) {
        super(props);
        this.state = {
            listOfRepo: [],
            searched: false,
            detailRepo: null,
            user: null,
        } 
    }
    onSearch = (listOfRepo: any[], user: any | null) => {
        this.setState({ listOfRepo: listOfRepoMapping(listOfRepo), user: user ? userMapping(user) : user, searched: true })
    }
    onSearchDetail = (detailRepo: any | null) => {
        this.setState({ detailRepo: detailRepo ? detailRepoMapping(detailRepo) : detailRepo })
    }

    render() {
        return <div className='home-container'>
            <Header />
            <Search onSearch={this.onSearch} />
            {this.state.searched && this.state.user && 
                <div className='home-detail'>
                    <User user={this.state.user}/>
                    <div className='home-list-detail'>
                        <ListOfRepo listOfRepo={this.state.listOfRepo} onClick={this.onSearchDetail} user={this.state.user}/>
                        {this.state.detailRepo && <DetailRepo detailRepo={this.state.detailRepo}/>}
                    </div>
                </div>
            }
            {this.state.searched && !this.state.user &&
                <div>
                    Utilisateur non trouvé
                </div>
            }
        </div>
    }
}