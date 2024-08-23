import axios from "axios";
import serviceMock from "../mock/serviceMock";
import accountMock from "../mock/accountMock";
import contactsMock from "../mock/contactMock";
import leadMock from "../mock/leadMock";
import packagesMock from "../mock/packagesMock";
import { mock } from "node:test";

export default class ApiService {
  async findAllServices() {
    console.log(`Looking for all CRM Account`);
    try {
      return serviceMock;
    } catch (err: any) {
      console.error(err);
    }
  }
  //?criteria=(Product_Active:equals:true)and(Package_Service:equals:false)
  async findAllPackages() {
    console.log(`Looking for all Pachages`);
    try {
      return packagesMock;
    } catch (err: any) {
      console.error(err);
    }
  }

  async findAllLeads() {
    console.log(`Looking for all Leads`);
    try {
      return leadMock;
    } catch (err: any) {
      console.error(err);
    }
  }

  async findAllAccounts() {
    console.log(`Looking for all Account`);
    try {
      return accountMock;
    } catch (err: any) {
      console.error(err);
    }
  }
  async findAllContacts() {
    console.log(`Looking for all Contacts API`);
    try {
      return contactsMock;
    } catch (err: any) {
      console.error(err);
    }
  }

  async createProposal(data: any) {
    console.log(`Createing proposal CRM`);
    try {
      return mock;
    } catch (err: any) {
      console.error(err);
    }
  }

  async getOauthToken(service: string) {
    return "Token";
  }
}
