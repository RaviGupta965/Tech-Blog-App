import config from '../config/config.js'
import { Client,ID,Databases,Storage,Query } from 'appwrite'

export class Service{
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId)
        this.databases=new Databases(this.client)
        this.bucket=new Storage(this.client);
    }

    async createPost({title,slug,content,featuredimage,status,userid}){
        try{
            return await this.databases.createDocument(config.appwriteDatabaseId,config.appwriteColectionId,slug,{
                title,content,featuredimage,status,userid
            })
        }
        catch(err){
            console.log('Appwrite service :: CreatePost :: error',err)
        }
    }

    async updatePost(slug,{title,content,featuredimage,status}){
        try{
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteColectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                }
            )
        }
        catch(err){
            console.log('Appwrite service :: update :: error',err)
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteColectionId,
                slug
            )
            return true;
        }
        catch(err){
            console.log('Appwrite service :: Delete :: error',err)
            return false;
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteColectionId,
                slug
            ) 
        }
        catch(err){
            console.log(console.log('Appwrite service :: getPost :: error',err))
            return false;
        }
    }

    async getPosts(queries=[Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteColectionId,
                queries,
            ) 
        }
        catch(err){
            console.log('Appwrite service :: getPosts :: error',err)
            return false;
        }
    }

    // upload files
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }


    async deleteFile(fileId){
        try{
            await this.bucket.createFile(
                config.appwriteBucketId,
                fileId
            ) 
            return true;
        }
        catch(err){
            console.log(console.log('Appwrite service :: deleteFiles :: error',err))
            return false;
        }
    }

    getfilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}

const service=new Service()
export default service