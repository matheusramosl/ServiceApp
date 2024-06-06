import axios from "axios";
import serviceMock from "../mock/serviceMock";
import accountMock from "../mock/accountMock";
import leadMock from "../mock/leadMock";
import contactMock from "../mock/contactMock";
import packagesMock from "../mock/packagesMock";
import createMock from "../mock/createProposalMock";

export default class ZohoService {
  async findAllServices() {
    console.log(`Looking for all CRM Account`);
    try {
      const token = await this.getOauthToken('crm')
      const result = await axios({
        method: "get",
        url: `https://www.zohoapis.com/crm/v3/Products?fields=Recurrence,Payment_Terms,Unit_Price,Service_Provider1,Description,Notes1,Product_Name`,
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          "Content-Type": "application/json",
        },
      });
      return result.data.data;
    } catch (err: any) {
      console.error(err);
    }
  }

  async findAllPackages() {
    console.log(`Looking for all CRM Account`);
    try {
      const token = await this.getOauthToken('crm')
      const result = await axios({
        method: "get",
        url: `https://www.zohoapis.com/crm/v3/Packages`,
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          "Content-Type": "application/json",
        },
      });
      return result.data.data;
    } catch (err: any) {
      console.error(err);
    }
  }

  async findAllLeads() {
    console.log(`Looking for all CRM Account`);
    try {
      const token = await this.getOauthToken('crm')
      const result = await axios({
        method: "get",
        url: `https://www.zohoapis.com/crm/v3/Leads?fields=First_Name,Last_Name,Email`,
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          "Content-Type": "application/json",
        },
      });
      return result.data.data;
    } catch (err: any) {
      console.error(err);
    }
  }

  async findAllParentAccounts() {
    console.log(`Looking for all CRM Account`);
    try {
      const parent = encodeURIComponent("Parent Account");
      const token = await this.getOauthToken('crm')
      const result = await axios({
        method: "get",
        url: `https://www.zohoapis.com/crm/v3/Accounts/search?criteria=(Account_Type:equals:${parent})`,
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          "Content-Type": "application/json",
        },
      });
      return result.data.data;
    } catch (err: any) {
      console.error(err);
    }
  }

  async findAllAccounts() {
    console.log(`Looking for all CRM Account`);
    try {
      const token = await this.getOauthToken('crm')
      const result = await axios({
        method: "get",
        url: `https://www.zohoapis.com/crm/v3/Accounts`,
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          "Content-Type": "application/json",
        },
      });
      return result.data.data;
    } catch (err: any) {

      console.error(err);
    }
  }

  async findAllContacts() {
    console.log(`Looking for all CRM Account`);
    try {
      const token = await this.getOauthToken('crm')
      const result = await axios({
        method: "get",
        url: `https://www.zohoapis.com/crm/v3/Contacts?fields=Last_Name,First_Name,Account_Name,Email`,
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          "Content-Type": "application/json",
        },
      });
      return result.data.data;
    } catch (err: any) {
      console.error(err);
    }
  }

  async createProposal(data: any) {
    console.log(`Createing proposal CRM`);
    try {
      const token = await this.getOauthToken('crm')
      const result = await axios({
        method: "get",
        url: `https://www.zohoapis.com/crm/v3/Contacts?fields=Last_Name,First_Name,Account_Name,Email`,
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          "Content-Type": "application/json",
        },
      });
      return result.data.data;
    } catch (err: any) {
      console.error(err);
    }
  }
  async getOauthToken(service: string) {
   
    const result = await axios({
      method: "get",
      url: ` https://us-central1-drummond-tech-apis.cloudfunctions.net/getAccessToken/${service}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result.data
  }
}
