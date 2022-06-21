import { Octokit } from 'octokit'
import { useCallback, useState } from 'react'
import { RequestError } from '@octokit/types'

type Repository = {
	fullName: string
	description?: string
	openIssuesCount?: number
	defaultBranch?: string
	htmlUrl?: string 
	owner?: {
		htmlUrl: string
	}
}

export default function useRepos() {
	const [repositories, setRepositories] = useState<Repository[]>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<RequestError>()
	
	
	const getReposByFullName = useCallback((repositoryFullName: string) => {
		const octokit = new Octokit({
			auth: process.env.PERSONAL_TOKEN
		})
		const callAPI = async () => {
			setLoading(true)
			try {
				const result = await (await octokit.request(`GET /search/repositories`, {q: `${repositoryFullName}`})).data
				const normalizedRepositories = result.items.map((repository) => {
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
				setRepositories(normalizedRepositories as Repository[])
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