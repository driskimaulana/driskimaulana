export default {
    name: "blog",
    type: "document",
    title: "Blog",
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'summary',
            type: 'string',
            title: 'Summary',
        },
        {
            name: 'cover',
            type: 'string',
            title: 'Cover',
        },
        {
            name: 'link',
            type: 'string',
            title: 'Link',
        }
    ]
}