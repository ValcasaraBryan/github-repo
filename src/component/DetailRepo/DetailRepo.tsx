import { Component } from 'react';
import { IProject } from '../../model/listOfRepo.model'
import './DetailRepo.css';
import dayjs from 'dayjs'

interface DetailRepoProps {
    detailRepo: IProject;
}

export default class DetailRepo extends Component<DetailRepoProps>{
    render() {
        return (
            <div className='detailRepo-container'>
                <div>Name project: {this.props.detailRepo.name}</div>
                <div>Stars: {this.props.detailRepo.stargazers_count}</div>
                <div>Description: {this.props.detailRepo.description}</div>
                <div>Language: {this.props.detailRepo.language}</div>
                <div>Created at: {dayjs(this.props.detailRepo.created_at).format("DD/MM/YYYY")}</div>
                <div>Last update at: {dayjs(this.props.detailRepo.updated_at).format("DD/MM/YYYY")}</div>
                <div>Link: <a target={'_blank'} href={this.props.detailRepo.html_url}>{this.props.detailRepo.html_url}</a></div>
            </div>
        )
    }
}