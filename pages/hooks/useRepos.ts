import { Octokit } from 'octokit'
import { useCallback, useState } from 'react'
import { Repository } from '../types/Repositories'
import { RequestError } from '@octokit/types'

export type ResponseRepository = {
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
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<RequestError>()
	
	const getReposByFullName = useCallback((repositoryFullName: string) => {
		console.log('REPOOO,' , repositoryFullName);
		
		const octokit = new Octokit({
			auth: process.env.PERSONAL_TOKEN
		})
		const callAPI = async () => {
			setLoading(true)
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
			} catch (error) {
				setError(error as RequestError)
			} finally {
				setLoading(false)
			}
		};
		callAPI()
	}, [])

  return {repositories, loading, error, getReposByFullName}
}