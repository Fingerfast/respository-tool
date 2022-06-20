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