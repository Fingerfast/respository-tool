import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useState } from 'react'
import styles from '../styles/Repositories.module.css'
import Input from './components/Input/Input'
import Issues from './containers/Issues/Issues'
import Respositories from './containers/Repositories/Repositories'
import useIssues, { Issue } from './useIssues'
import useRepos from './useRepos'

// PERSONAL TOKEN
export const personalGithubToken = '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'

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState('')
  const {getReposByFullName, repositories} = useRepos()
  const {issues, getIssuesByRepo} = useIssues()
  const [issuesRepositoryName, setIssuesRepositoryName] = useState('')
  
  let timeout: any = null;
  const handleSearchInput = useCallback((value: string) => {
    function doDelayedSearch(value: string) {
      if (timeout) {  
        clearTimeout(timeout);
      }
      timeout = setTimeout(function() {
        getReposByFullName(value)
      }, 1000);
    }
    doDelayedSearch(value)
    setSearchText(value)
  }, [])

  const clickOnShowIssues = useCallback((repoName: string) => {
    getIssuesByRepo(repoName)
    setIssuesRepositoryName(repoName)
  }, [getIssuesByRepo])

  return (
    <div className={styles.container}>
      <Head>
        <title>Repositiry Tool</title>
        <meta name="description" content="App for search repository and show eventual issues" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.grid}>
          <Input handleSearchInput={handleSearchInput} value={searchText}/>
        </div>
        <div className={styles.grid}>
          {searchText === '' 
            ? <p>For show repositories, start typing in search input.</p>
            : <>
                <Respositories {...{repositories}} handleShowIssues={clickOnShowIssues}/>
                  {issues.length > 0 && 
                    <Issues title={issuesRepositoryName} {...{issues}}/>
                  }
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Home
