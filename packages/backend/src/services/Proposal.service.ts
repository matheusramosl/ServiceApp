import axios from "axios";
import ApiService from "./API.service";
import { error } from "console";

export default class ProposalService {
  private _service: ApiService;

  constructor(zohoService: ApiService) {
    this._service = zohoService;
  }

  public async getWorld() {
    return "hello world!!";
  }

  async findAllServices() {
    console.log(`Looking for all CRM Account`);
    try {
      const result = this._service.findAllServices();
      return result;
    } catch (err: any) {
      console.error(err);
    }
  }

  async findAllPackages() {
    console.log(`Looking for all CRM Account`);
    try {
      const result = this._service.findAllPackages();
      return result;
    } catch (err: any) {
      console.error(err);
    }
  }

  async findAllLeads() {
    console.log(`Looking for all CRM Account`);
    try {
      const result = this._service.findAllLeads();
      return result;
    } catch (err: any) {
      console.error(err);
    }
  }

  async findAllAccounts() {
    console.log(`Looking for all Account`);
    try {
      const result = this._service.findAllAccounts();
      return result;
    } catch (err: any) {
      console.error(err);
    }
  }

  async findAllContacts() {
    console.log(`Looking for all Contacts`);
    try {
      const result = this._service.findAllContacts();
      return result;
    } catch (err: any) {
      console.error(err);
    }
  }

  async createProposal(data: any) {
    try {
      const result = this._service.createProposal(data);
      return result;
    } catch (err: any) {
      console.error(err);
    }
  }
}
