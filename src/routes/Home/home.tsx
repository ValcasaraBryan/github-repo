import { Component } from 'react';
import Header from '../../component/Header/header';
import Search from '../../component/Search/search';
import './home.css';

export default class HomeScreen extends Component {
    onSearch = (listRepos: any[]) => {
        console.log("listRepos", listRepos)
    }

    render() {
        return <div className='home-container'>
            <Header />
            <Search onSearch={this.onSearch}/>
        </div>
    }
}