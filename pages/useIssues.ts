import {Octokit} from 'octokit'
import { useCallback, useState } from 'react'
import { personalGithubToken } from '.'

export type Issue = {
    title: string
    body?: string
}

export default function useIssues() {
    const [issues, setIssues] = useState<Issue[]>([])
    const getIssuesByRepo = useCallback((repo: string) => {
        const octokit = new Octokit({
            auth: personalGithubToken
        })
        const callAPI = async () => {
            try {
                const issues = await (await octokit.request(`GET /repos/${repo}/issues`, {per_page: 10, sort: 'DESC'})).data
                setIssues(issues)
            } catch (err) {
                console.log(err);
            }
        };
        callAPI()
    }, [])

  return {issues, getIssuesByRepo}
}