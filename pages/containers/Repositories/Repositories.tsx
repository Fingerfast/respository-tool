import { Repository } from '../../useRepos'
import styles from '../../../styles/Repositories.module.css'

type RepositoriesProps = {
    repositories: Repository[]
    handleShowIssues?: (repoName: string) => void
}

const Respositories = (props: RepositoriesProps) => {
    const {repositories} = props

    return (
        <div className={styles.card}>
            <div className={styles.row}><h1 className={styles.title}>Repositories</h1></div>
            {repositories.length > 0 ? 
                repositories.map((repository, i) => <RepositoryItem key={i} {...repository} {...props}/>) :
                <div className={styles.loader}></div>
            }
        </div>
        )
    }

const RepositoryItem = (props: Repository & RepositoriesProps ) => {
    return (
        <div className={styles.row}>
            <div className={styles.infoPanel}>
                <div>
                    <a href={props.owner?.htmlUrl} target={'_blank'} className={styles.link} rel="noreferrer">{props.fullName?.split('/')[0]}</a>
                    <span> / </span>
                    <a href={props.htmlUrl} target={'_blank'} className={styles.link} rel="noreferrer">{props.fullName?.split('/')[1]}</a>
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

export default Respositories
