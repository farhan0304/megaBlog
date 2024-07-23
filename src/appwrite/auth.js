import conf from '../conf/conf'
import {Client, Account, ID} from 'appwrite'

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) 
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }
    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if (userAccount) {
                return await userLogin(email,password)
            } else {
                return userAccount
            }
        } catch (error) {
            throw (error)
        }
    }
    async userLogin({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw (error)
        }
    }
    async getUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Authenticate service :: getUser :: Error ", error)
        }
        return null;
    }
    async userLogout(){
        try {
            this.account.deleteSessions();
        } catch (error) {
            console.log("Authenticate service :: userLogout :: Error ", error)
        }
    }


}

const authservice = new AuthService();

export default authservice;