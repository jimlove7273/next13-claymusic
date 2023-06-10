import { PostsType, ConcertType } from '@/sanity/SanityDataProps'
import { client } from './client'
import { createClient, groq } from 'next-sanity';

export async function getPosts(): Promise<PostsType[]> {
    return createClient(client).fetch(
        groq`*[_type == "posts"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "mainImage": mainImage.asset->url,
            content
        }`
    )
}

export async function getPost(slug: string): Promise<PostsType> {
    return createClient(client).fetch(
        groq`*[_type == "posts" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "mainImage": mainImage.asset->url,
            content
        }`, { slug }
    )
}

export async function getConcerts(): Promise<ConcertType[]> {
    return createClient(client).fetch(
        groq`*[_type == "concerts"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            date,
            venue,
            address,
            city,
            state,
            zipcode,
            contactperson,
            contactphone,
            contactemail
        }`
    )
}