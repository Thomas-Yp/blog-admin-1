import 'whatwg-fetch'
import { IPayload } from '../actions/articles'
import { blogFetch } from '../common'

export const fetchArticles = (payLoad: IPayload) =>
  blogFetch('/articles', payLoad)

export const fetchInfo = () => blogFetch('/info')

export const fetchResume = () => blogFetch('/resume')

export const fetchArticle = (Id: string) => blogFetch('/article', { Id })
