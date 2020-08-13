import Api from'@/services/Api'
export default {
    index () {   
        return Api().get('blogs')
    },
    show (blogId) {
        return Api().get('blog/'+blogId)
    },
    post (blog) {
        returnApi().post('blog', blog)
    },
    put (blog) {
        returnApi().put('blog/'+blog.id, blog)
    },
    delete (blog) {
        returnApi().delete('blog/'+blog.id, blog)
    },
}