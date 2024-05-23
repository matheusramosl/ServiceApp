import axios from "axios";
import serviceMock from "../mock/serviceMock";
import accountMock from "../mock/accountMock";
import leadMock from "../mock/leadMock";
import contactMock from "../mock/contactMock";
import packagesMock from "../mock/packagesMock";

export default class ZohoService {
    async findAllServices() {
        console.log(`Looking for all CRM Account`);
        try {
          const result = await axios({
            method: 'get',
            url: `https://www.zohoapis.com/crm/v3/Products?fields=Recurrence,Payment_Terms,Unit_Price,Service_Provider1,Description,Notes1&per_page=5`,
            headers: {
              Authorization: `Zoho-oauthtoken `,
              'Content-Type': 'application/json',
            },
          });
          return serviceMock;
        } catch (err: any) {
            return serviceMock;
            console.error(err);
          
        }
      }
      
      async findAllPackages() {
        console.log(`Looking for all CRM Account`);
        try {

      
          const result = await axios({
            method: 'get',
            url: `https://www.zohoapis.com/crm/v3/Packages`,
            headers: {
              Authorization: `Zoho-oauthtoken `,
              'Content-Type': 'application/json',
            },
          });
          return packagesMock;
        } catch (err: any) {
          return packagesMock;

          console.error(err);
          
        }
      }
      
      async findAllLeads() {
        console.log(`Looking for all CRM Account`);
        try {
      
          const result = await axios({
            method: 'get',
            url: `https://www.zohoapis.com/crm/v3/Leads?fields=Last_Name,Email&per_page=5`,
            headers: {
              Authorization: `Zoho-oauthtoken `,
              'Content-Type': 'application/json',
            },
          });
          return leadMock;
        } catch (err: any) {
            return leadMock;
          console.error(err);
          
        }
      }
      
      async findAllParentAccounts() {
        console.log(`Looking for all CRM Account`);
        try {
      
          const parent = encodeURIComponent('Parent Account');
      
          const result = await axios({
            method: 'get',
            url: `https://www.zohoapis.com/crm/v3/Accounts/search?criteria=(Account_Type:equals:${parent})`,
            headers: {
              Authorization: `Zoho-oauthtoken`,
              'Content-Type': 'application/json',
            },
          });
          return result;
        } catch (err: any) {
            console.error(err);
            
        }
      }
      
      async findAllAccounts() {
        console.log(`Looking for all CRM Account`);
        try {
      
          const result = await axios({
            method: 'get',
            url: `https://www.zohoapis.com/crm/v3/Accounts`,
            headers: {
              Authorization: `Zoho-oauthtoken `,
              'Content-Type': 'application/json',
            },
          });
          return accountMock;
        } catch (err: any) {
          return accountMock;

            console.error(err);
            
        }
      }
      
      async findAllContacts() {
        console.log(`Looking for all CRM Account`);
        try {

      
          const result = await axios({
            method: 'get',
            url: `https://www.zohoapis.com/crm/v3/Contacts?fields=Last_Name,First_Name,Account_Name,Email&per_page=5`,
            headers: {
              Authorization: `Zoho-oauthtoken`,
              'Content-Type': 'application/json',
            },
          });
          return contactMock;
        } catch (err: any) {
          return contactMock;
            console.error(err);
            
        }
      }
}