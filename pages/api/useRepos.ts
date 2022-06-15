import {Octokit} from 'octokit'
import { useCallback, useState } from 'react'
import { personalGithubToken } from '../index'

export type Repository = {
    fullName: string
    description?: string
    openIssuesCount?: number
    defaultBranch?: string
    htmlUrl?: string 
    owner?: {
        htmlUrl: string
    }
}

type ResponseRepository = {
    full_name: string
    description?: string
    open_issues_count?: number
    default_branch?: string
    html_url?: string
    owner?: {
        html_url: string
    }
}

export default function useRepos() {
    const [repositories, setRepositories] = useState<Repository[]>([])
    const getReposByFullName = useCallback((repositoryFullName: string) => {
        console.log('AUTH' , personalGithubToken);
        
        const octokit = new Octokit({
            auth: personalGithubToken
        })
        const callAPI = async () => {
        try {
            const result = await (await octokit.request(`GET /search/repositories`, {q: `${repositoryFullName}`})).data
            const normalizedRepositories: Repository[] = result.items.map((repository: any) => {
                return {
                    fullName: repository.full_name,
                    description: repository.description,
                    openIssuesCount: repository.open_issues_count,
                    defaultBranch: repository.default_branch,
                    htmlUrl: repository.html_url,
                    owner: {
                        htmlUrl: repository.owner?.html_url
                    }
                }
            })
            setRepositories(normalizedRepositories)
        } catch (err) {
            console.log(err);
        }
        };
        callAPI()
    }, [])

  return {repositories, getReposByFullName}
}