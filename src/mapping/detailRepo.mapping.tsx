import { IProject } from '../model/listOfRepo.model'

export default function detailRepoMapping(detailRepo: any): IProject {
    return ({
        id: detailRepo.id,
        name: detailRepo.name,
        stargazers_count: detailRepo.stargazers_count,
        description: detailRepo.description,
        language: detailRepo.language,
        created_at: detailRepo.created_at,
        updated_at: detailRepo.updated_at,
        html_url: detailRepo.html_url
    })
}
