import { IRepo } from '../model/listOfRepo.model'

export default function listOfRepoMapping(listOfRepo: any[]): IRepo[] {
    return listOfRepo.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        url: repo.url,
    }))
}