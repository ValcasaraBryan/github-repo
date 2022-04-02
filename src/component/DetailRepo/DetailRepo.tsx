import { Component } from 'react';
import { IProject } from '../../model/listOfRepo.model'
import './DetailRepo.css';

interface DetailRepoProps {
    detailRepo: IProject;
}

export default class DetailRepo extends Component<DetailRepoProps>{
    render() {
        return (
            <div className='detailRepo-container'>
                <div>{this.props.detailRepo.name}</div>
                <div>{this.props.detailRepo.stargazers_count}</div>
                <div>{this.props.detailRepo.description}</div>
                <div>{this.props.detailRepo.language}</div>
                <div>{this.props.detailRepo.created_at}</div>
                <div>{this.props.detailRepo.updated_at}</div>
                <div>{this.props.detailRepo.html_url}</div>
            </div>
        )
    }
}