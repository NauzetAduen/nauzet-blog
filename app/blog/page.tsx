import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import GetPosts from './getPosts'



export default function Blog() {
    return (
        <div>
            <GetPosts />
        </div>
    )
}
