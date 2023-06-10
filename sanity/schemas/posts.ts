const posts = {
    name: 'posts',
    title: 'Posts',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            }
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [{
                name: 'alt',
                title: 'Alt',
                type: 'string'
            }]
        },
        {
            name: 'content',
            title: 'Content',
            // type: 'blockContent',
            type: 'array',
            of: [{ type: 'block'}]
        }
    ]
}

export default posts;