import Link from 'next/link';


const Button = ({ tag, number }) => {
    return (
        <div className="not-prose"><Link href={"/tags/" + tag}><button className="no-underline relative inline-block text-sm font-medium text-blue-700 group"><span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-700 group-hover:translate-y-0 group-hover:translate-x-0"></span><span className="relative block px-4 py-2 bg-white border border-current">#{tag} ({number})</span></button></Link></div>
    )
}

const tags = () => {
    return (
        <div className='h-[80vh]'>
            <h1 className='font-extrabold text-center text-[3rem]'>Tags</h1>
            <div className='flex justify-center gap-4 flex-wrap py-[3rem]'>
                <Button tag="Action" number="3" />
                <Button tag="Sci-Fi" number="13" />
                <Button tag="Crime" number="27" />
                <Button tag="Fantasy" number="2" />
            </div>
        </div>
    )
}

export default tags