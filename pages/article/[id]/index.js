import Link from "next/link";
import { server } from "../../../config";
export default function article({article}) {
    console.log(article)
  return (
    <>
        <h1>{article.title}</h1>
        <p>
            {article.body}
        </p>
        <Link href='/'>Go back</Link>
    </>
  )
}

export const getStaticProps = async (context)=>{
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json();

    return{
        props:{
            article
        }
    }
}

export const getStaticPaths = async (context)=>{
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json();

    const ids = articles.map((article)=>article.id)

    const paths = ids.map((id)=>({params:{id:id.toString()}}))

    return{
        paths,
        fallback:false
    }
}