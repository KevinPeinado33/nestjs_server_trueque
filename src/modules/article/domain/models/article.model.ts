export class ArticleModel {

    id?: string
    title: string
    description: string
    publishDate?: Date
    slug?: string
    images: string[]
    status?: boolean
    condition: number
    type?: string
    userId: string
    categoryId: string
    
    constructor({ ...values }: IArticleModel) {
        this.id          = values.id
        this.title       = values.title
        this.description = values.description
        this.publishDate = values.publishDate
        this.images      = values.images
        this.condition   = values.condition
        this.status      = values.status || true
        this.type        = values.type || 'normal'
        this.userId      = values.userId
        this.categoryId  = values.categoryId
        
        this.slug        = this.generateSlug(values.slug || values.title) 
    }
    
    private generateSlug(slug: string): string {

        const sanitizedInput = slug
                                .toLowerCase()
                                .replaceAll(' ', '_')
                                .replaceAll("'",'')

        return `${ sanitizedInput}_${this.id?.substring( 0, 5 )}`
        
    }

}

interface IArticleModel {
    id?: string
    title: string
    description: string
    publishDate?: Date
    slug?: string
    images: string[]
    status?: boolean
    condition: number
    type?: string
    userId: string
    categoryId: string
}
