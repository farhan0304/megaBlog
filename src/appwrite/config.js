import conf from '../conf/conf'
import {Client, Databases, Storage,ID, Query} from 'appwrite'

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                  title,
                  content,
                  featuredImage,
                  status,
                  userId  
                }
            )
        } catch (error) {
            console.log("Authenticate Service :: error :: createPost")
        }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("object")
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("object")
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("object")
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("object")
            return false
        }
    }

    // file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("object")
            return false
        }
    }

    async deleteFile(fileid){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileid
            )
            return true
        } catch (error) {
            console.log("Appwrite")
            return false
        }
    }

    getFilePreview(fileid){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileid
        )
    }

    
}


const service = new Service();

export default service