export default {
    name: "portfolio",
    type: "document",
    title: "Portfolio",
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'slug',
            type: 'string',
            title: 'Slug',
        },
        {
            name: "category",
            type: 'string',
            title: 'Category'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            name: 'tools',
            type: 'string',
            title: 'Tools',
        },
        {
            name: 'github',
            type: 'string',
            title: 'Github',
        },
        {
            name: 'link',
            type: 'string',
            title: 'Link'
        },
        {
            name: 'screenshots',
            type: 'array',
            title: 'Screenshots',
            of: [
                {
                    type: 'string',
                    title: 'Link to image',
                }
            ]
        },
    ]
}