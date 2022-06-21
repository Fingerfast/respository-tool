import styles from './IssuesList.module.css'

type Issue = {
	title: string
	body?: string
}

type IssuesProps = {
	title: string
	issues?: Issue[]
}

const IssuesList = (props: IssuesProps) => {
	const {issues, title} = props
	
	return (
		<div className={'card'}>
			<div className={'row'}><h1 className={styles.title}>{`${title} Issues`}</h1></div>
			{issues && issues?.length > 0 && issues?.map((issue, i) => <IssueItem key={i} {...issue} {...props}/>)}
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
				<p className={styles.description}>
					{body}
				</p>
			</div>
		</div>
	)
}

export default IssuesList
