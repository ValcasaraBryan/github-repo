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
                <div>Name project: {this.props.detailRepo.name}</div>
                <div>Stars: {this.props.detailRepo.stargazers_count} / 5</div>
                <div>Description: {this.props.detailRepo.description}</div>
                <div>Language: {this.props.detailRepo.language}</div>
                <div>Created at: {this.props.detailRepo.created_at}</div>
                <div>Update at: {this.props.detailRepo.updated_at}</div>
                <div>Link: {this.props.detailRepo.html_url}</div>
            </div>
        )
    }
}