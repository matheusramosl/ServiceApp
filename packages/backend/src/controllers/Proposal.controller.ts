import { Request, Response } from "express";
import ProposalService from "../services/Proposal.service";

export default class ProposalController {
  private _service: ProposalService;

  constructor(proposalService: ProposalService) {
    this._service = proposalService;
  }

  public async getProposal(_req: Request, res: Response) {
    const result = await this._service.getWorld();
    console.log(result);

    res.status(200).json({ result });
  }

  public async getServices(_req: Request, res: Response) {
    const services = await this._service.findAllServices();

    res.status(200).json({ services });
  }
  public async getAccounts(_req: Request, res: Response) {
    const accounts = await this._service.findAllAccounts();
    console.log(accounts);

    res.status(200).json({ accounts });
  }

  public async getLeads(_req: Request, res: Response) {
    const leads = await this._service.findAllLeads();
    res.status(200).json({ leads });
  }

  public async getContacts(_req: Request, res: Response) {
    console.log("controller");
    const contacts = await this._service.findAllContacts();

    res.status(200).json({ contacts });
  }

  public async getPackages(_req: Request, res: Response) {
    const packages = await this._service.findAllPackages();

    res.status(200).json({ packages });
  }

  public async createProposal(req: Request, res: Response) {
    const packages = await this._service.createProposal(req.body);

    res.status(200).json({ packages });
  }
}
