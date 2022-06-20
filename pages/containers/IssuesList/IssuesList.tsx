import { Issue } from '../../hooks/useIssues'
import styles from '../Repositories/Repositories.module.css'

type IssuesProps = {
	title: string
	issues?: Issue[]
}

const IssuesList = (props: IssuesProps) => {
	const {issues, title} = props
	
	return (
		<div className={'card'}>
			<div className={'row'}><h1 className={styles.title}>{`${title} Issues`}</h1></div>
			{issues && issues?.length > 0 ? 
				issues?.map((issue, i) => <IssueItem key={i} {...issue} {...props}/>) :
				<div className={styles.loader}></div>
			}
		</div>
		)
	}

const IssueItem = (props: Issue ) => {
	const {body, title} = props
	return (
		<div className={'row'}>
			<div className={`${styles.infoPanel} ${styles.fullWidth}`}>
				<div className={styles.bold}>
					{title}
				</div>
				<div className={styles.description}>
					{body}
				</div>
			</div>
		</div>
	)
}

export default IssuesList
