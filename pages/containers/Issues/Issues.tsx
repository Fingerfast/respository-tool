import useRepos, { Repository } from '../../api/useRepos'
import styles from '../../../styles/Repositories.module.css'
import { Issue } from '../../api/useIssues'

type IssuesProps = {
    title: string
    issues?: Issue[]
}

const Issues = (props: IssuesProps) => {
    const {issues} = props
    
    return (
        <div className={styles.card}>
            <div className={styles.row}><h1 className={styles.title}>{`${props.title} Issues`}</h1></div>
            {issues && issues?.length > 0 ? 
                issues?.map((issue, i) => <IssueItem key={i} {...issue} {...props}/>) :
                <div className={styles.loader}></div>
            }
        </div>
        )
    }

const IssueItem = (props: Issue ) => {
    return (
        <div className={styles.row}>
            <div className={`${styles.infoPanel} ${styles.fullWidth}`}>
                <div className={styles.bold}>
                    {props.title}
                </div>
                <div className={styles.description}>
                    {props.body}
                </div>
            </div>
        </div>
    )
}

export default Issues
