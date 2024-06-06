import axios from "axios";
import ZohoService from "./Zoho.service";
import { error } from "console";

export default class ProposalService {
  private _service: ZohoService;

  constructor(zohoService: ZohoService) {
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

  async findAllParentAccounts() {
    console.log(`Looking for all CRM Account`);
    try {
      const result = this._service.findAllParentAccounts();
      return result;
    } catch (err: any) {
      console.error(err);
    }
  }

  async findAllAccounts() {
    console.log(`Looking for all CRM Account`);
    try {
      const result = this._service.findAllAccounts();
      return result;
    } catch (err: any) {
      console.error(err);
    }
  }

  async findAllContacts() {
    console.log(`Looking for all CRM Account`);
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


  async createNewProposalWithEmail(payload: any) {
    console.log(`Creating a new Proposal with email ${payload.email}...`);
    try {
      const token = await this._service.getOauthToken('crm');
      const services = await this.findServicesById(payload.servicesID);
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 30);

      const day =
        dueDate.getDate() < 10 ? `0${dueDate.getDate()}` : dueDate.getDate();
      const month =
        dueDate.getMonth() + 1 < 10
          ? `0${dueDate.getMonth() + 1}`
          : dueDate.getMonth() + 1;
      const formattedDate = dueDate.getFullYear() + '-' + month + '-' + day;

      const incompleteObject = {
        Due_Date: formattedDate,
        Stage: 'Proposal Sent',
        Proposal_Services: services.data.map((service: any) => ({
          Service: {
            name: service.Product_Name,
            id: service.id,
          },
          Recurrence: service.Recurrence,
          Payment_Terms:
            service.Payment_Terms ||
            service.Payment_Terms1 ||
            'Upon EL Signature',
          Service_Provider:
            service.Service_Provider || service.Service_Provider1.join(';'),
          Effective_Year: dueDate.getFullYear().toString(),
          Note: service.Notes1,
          Unit_Price: service.Unit_Price,
          Description: service.Description,
          Email: payload.email,
        })),
      };
      let proposalObject = {};

      if (payload.userType === 'Lead') {
        const lead = await this.findLeadByEmail(payload.email);

        incompleteObject.Proposal_Services.forEach((element : any) => {
          element.Receiver = lead.Full_Name;
        });
        proposalObject = {
          ...incompleteObject,
          Layout: { name: 'Leads Proposal', id: '4978288000036879029' },
          Name: `Proposal for ${lead.Full_Name}`,
          Lead: {
            id: lead.id,
          },
          Owner: {
            id: lead.Owner.id,
          },
        };
        if (!payload.email) {
          proposalObject = {
            ...proposalObject,
            Email: lead.Email,
          };
        }
      } else if (payload.userType === 'Contact') {
        const contact = await this.findContactByEmail(payload.email);

        incompleteObject.Proposal_Services.forEach((element: any) => {
          element.Receiver = contact.data.data[0].Full_Name;
        });

        proposalObject = {
          ...incompleteObject,
          Layout: { name: 'Contacts Proposal', id: '4978288000041053168' },
          Name: `Proposal for ${contact.data.data[0].Full_Name}`,
          Contact: {
            id: contact.data.data[0].id,
          },
          Owner: {
            id: contact.data.data[0].Owner.id,
          },
        };
        if (!payload.email) {
          proposalObject = {
            ...proposalObject,
            Email: contact.data.data[0].Email,
          };
        }
      }

      const result = await axios({
        method: 'post',
        baseURL: `https://www.zohoapis.com/crm/v2/Proposal`,
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          'Content-Type': 'application/json',
        },
        data: {
          data: [
            {
              ...proposalObject,
            },
          ],
          trigger: ['approval', 'workflow', 'blueprint'],
        },
      });
      return result.data.data[0];
    } catch (err) {
      console.error(err);
    }
  }

  async findServicesById(payload: any) {
    console.log('Finding all services by ID...');
    try {
      const token = await this._service.getOauthToken('crm');
      const array = [] as any[];
      payload.forEach((id: string , index: number) => {
        if (payload.length - 1 === index) {
          const str2 = `(id:equals:${id})`;
          array.push(str2);
        } else {
          const str = `(id:equals:${id})or`;
          array.push(str);
        }
      });
      const result = await axios({
        method: 'get',
        baseURL: `https://www.zohoapis.com/crm/v3/Products/search?criteria=(${array.join(
          '',
        )})`,
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(result);
      return result.data;
    } catch (err) {
      console.error(err);
    }
  }

  async findLeadByEmail(email: string) {
    console.log(`Looking for lead with Email ${email}`);
    try {
      const token = await this._service.getOauthToken('crm');
      const result = await axios({
        method: 'get',
        baseURL: `https://www.zohoapis.com/crm/v2/Leads/search?criteria=(Email:equals:${email})`,
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (result) return result.data.data[0];
    } catch (err) {
      console.error(err);
    }
  }

  async findContactByEmail(email: string) {
    const token = await this._service.getOauthToken('crm');
    console.log(`Finding Contact on CRM with ${email}..`);
    try {
      const result = await axios({
        method: 'get',
        baseURL: `https://www.zohoapis.com/crm/v2/contacts/search?criteria=(Email:equals:${email})`,
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return result as any;
    } catch (err) {
      console.error(err);
      
    }
  }

  async getToken() {
    return this._service.getOauthToken('crm')
  }
}
