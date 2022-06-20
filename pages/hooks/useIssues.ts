import { Octokit } from 'octokit'
import { useCallback, useState } from 'react'
import { RequestError } from '@octokit/types'

export type Issue = {
	title: string
	body?: string
}

export default function useIssues() {
	const [issues, setIssues] = useState<Issue[]>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<RequestError>()

	const getIssuesByRepo = useCallback((repo: string) => {
		const octokit = new Octokit({
			auth: process.env.PERSONAL_TOKEN
		})
		const callAPI = async () => {
			setLoading(true)
			try {
				const issues: Issue[] = await (await octokit.request(`GET /repos/${repo}/issues`, {per_page: 10, sort: 'DESC'})).data
				setIssues(issues)
			} catch (error) {
				setError(error as RequestError)
			} finally {
				setLoading(false)
			}
		};
		callAPI()
	}, [])

  return {issues, error, loading, getIssuesByRepo}
}