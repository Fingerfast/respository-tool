import { useCallback, useState } from 'react'
import styles from './Repositories.module.css'
import Input from '../../components/Input/Input'
import Issues from '../IssuesList/IssuesList'
import _debounce from 'lodash.debounce'
import useRepos from '../../hooks/useRepos'
import useIssues from '../../hooks/useIssues'
import RespositoriesList from '../RepositoriesList/RepositoriesList'

const Respositories = () => {
    const [searchText, setSearchText] = useState('')
    const {repositories, loading: loadingRepositories, error: errorRepositories, getReposByFullName} = useRepos()
    const {issues, getIssuesByRepo} = useIssues()
    const [issuesRepositoryName, setIssuesRepositoryName] = useState('')

	const debounceSearch = useCallback(_debounce((value) => getReposByFullName(value), 1000), []);

    const onSearch = ((value: string) => {
		setSearchText(value)
		value !== '' && debounceSearch(value)
    })
  
    const clickOnShowIssues = useCallback((repoName: string) => {
		getIssuesByRepo(repoName)
		setIssuesRepositoryName(repoName)
    }, [getIssuesByRepo, setIssuesRepositoryName])

    return (
		<div className={styles.wrapper}>
			<div className="grid">
				<Input handleSearchInput={onSearch} value={searchText}/>
        	</div>
			<div className="grid">
				{searchText === '' 
					? <p>For show repositories, start typing in search input.</p>
					: <>
						<RespositoriesList {...{repositories, loadingRepositories, errorRepositories}} handleShowIssues={clickOnShowIssues}/>
						{issues?.length > 0 && !loadingRepositories &&
							<Issues title={issuesRepositoryName} {...{issues, styles}}/>
						}
					</>
				}
			</div>
		</div>
      )
  }

export default Respositories
