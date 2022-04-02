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
                <div><span>Name project:</span> {this.props.detailRepo.name}</div>
                <div><span>Stars:</span> {this.props.detailRepo.stargazers_count}</div>
                <div><span>Description:</span> {this.props.detailRepo.description}</div>
                <div><span>Language:</span> {this.props.detailRepo.language}</div>
                <div><span>Created at:</span> {dayjs(this.props.detailRepo.created_at).format("DD/MM/YYYY")}</div>
                <div><span>Last update at:</span> {dayjs(this.props.detailRepo.updated_at).format("DD/MM/YYYY")}</div>
                <div><span>Link:</span> <a target={'_blank'} href={this.props.detailRepo.html_url}>{this.props.detailRepo.html_url}</a></div>
            </div>
        )
    }
}