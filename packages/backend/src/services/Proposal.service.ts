import axios from "axios";
import ZohoService from "./Zoho.service";

export default class ProposalService {
    private _service: ZohoService;

    constructor(zohoService : ZohoService) {
      this._service = zohoService
    }

    public async getWorld() {
      return 'hello world!!'
    }
    
    async findAllServices() {
      console.log(`Looking for all CRM Account`);
      try {
        const result = this._service.findAllServices()
        return result;
      } catch (err: any) {
        console.error(err);
        
      }
    }
    
    async findAllPackages() {
      console.log(`Looking for all CRM Account`);
      try {
        const result = this._service.findAllPackages()
        return result;
      } catch (err: any) {
        console.error(err);
        
      }
      }
    
    async findAllLeads() {
      console.log(`Looking for all CRM Account`);
      try {
        const result = this._service.findAllLeads()
        return result;
      } catch (err: any) {
        console.error(err);
        
      }
    }
    
    async findAllParentAccounts() {
      console.log(`Looking for all CRM Account`);
      try {
        const result = this._service.findAllParentAccounts()
        return result;
      } catch (err: any) {
        console.error(err);
        
      }
    }
    
    async findAllAccounts() {
      console.log(`Looking for all CRM Account`);
      try {
        const result = this._service.findAllAccounts()
        return result;
      } catch (err: any) {
        console.error(err);
        
      }
    }
    
    async findAllContacts() {
      console.log(`Looking for all CRM Account`);
      try {
        const result = this._service.findAllContacts()
        return result;
      } catch (err: any) {
        console.error(err);
        
      }
    }
    
}
