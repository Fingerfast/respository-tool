import styles from './RepositoriesList.module.css'
import { RequestError } from '@octokit/types'

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

type RepositoriesProps = {
    repositories: Repository[]
    loadingRepositories?: boolean
    errorRepositories?: RequestError
    handleShowIssues?: (repoName: string) => void
}

const RespositoriesList = (props: RepositoriesProps) => {
    const {repositories, errorRepositories, loadingRepositories} = props
    
    return (
        <div className="card">
            <div className='row'>
                <h1 className={styles.title}>Repositories</h1>
            </div>
            {!loadingRepositories && errorRepositories && !repositories && <div className={styles.infoPanel}>Při načítání došlo k chybě</div>}
            {!loadingRepositories && !errorRepositories && repositories && repositories.length === 0 && <div className={styles.infoPanel}>Pro zadaný výraz nebyly nalezeny žádné záznamy</div>}
            {loadingRepositories && <div className={styles.loader}></div>}
            {repositories && !loadingRepositories && repositories.map((repository, i) => <RepositoryListItem key={i} {...repository} {...props}/>)}
        </div>
        )
    }

const RepositoryListItem = (props: Repository & RepositoriesProps ) => {
    return (
        <div className="row">
            <div className={styles.infoPanel}>
                <div>
                    <a href={props.owner?.htmlUrl} target="_blank" className={styles.link}>{props.fullName?.split('/')[0]}</a>
                    <span> / </span>
                    <a href={props.htmlUrl} target="_blank" className={styles.link}>{props.fullName?.split('/')[1]}</a>
                </div>
                <div className={styles.description}>
                    {props.description}
                </div>
                <div className={styles.branchName}>
                    {`Default branch: ${props.defaultBranch}`}
                </div>
            </div>
            {props.openIssuesCount && props.openIssuesCount > 0 
                ?
                    <div className={styles.showIssues} onClick={() => props.handleShowIssues?.(props.fullName || '')}>
                        <a className={styles.issuesLink}>Show issues</a>
                    </div>
                : 
                    null
            }
        </div>
    )
}

export default RespositoriesList
