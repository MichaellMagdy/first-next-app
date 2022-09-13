
import styles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

export default function ArticleList({ articles }) {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.key} article={article}/>
      ))}

    </div>
  )
}
