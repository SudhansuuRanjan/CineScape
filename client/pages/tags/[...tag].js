import { useRouter } from 'next/router'

const Tag = () => {

    const router = useRouter()
    const { tag, pid } = router.query

    return (
        <div>
            <p>Tag: {tag} </p>
            <p>PID: {pid}</p>
        </div>
    )
}

export default Tag

// http://localhost:3000/tags/tag?pid=12&tag=hello