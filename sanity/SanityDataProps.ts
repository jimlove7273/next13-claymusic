import { PortableTextBlock } from "sanity";

export type PostsType = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    mainImage: string;
    content: PortableTextBlock[];
}

export type ConcertType = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    date: string;
    venue: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    contactperson: string;
    contactphone: string;
    contactemail: string;
}