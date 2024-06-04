import { Router } from "express";
import ProposalService from "../services/Proposal.service";
import ProposalController from "../controllers/Proposal.controller";
import ZohoService from "../services/Zoho.service";

const proposalRoute = Router();

const zohoService = new ZohoService();
const proposalService = new ProposalService(zohoService);
const proposalController = new ProposalController(proposalService);

proposalRoute.get("/", (req, res) => proposalController.getProposal(req, res));
proposalRoute.get("/services", (req, res) =>
  proposalController.getServices(req, res)
);
proposalRoute.get("/accounts", (req, res) =>
  proposalController.getAccounts(req, res)
);
proposalRoute.get("/leads", (req, res) =>
  proposalController.getLeads(req, res)
);
proposalRoute.get("/contacts", (req, res) =>
  proposalController.getContacts(req, res)
);
proposalRoute.get("/packages", (req, res) =>
  proposalController.getPackages(req, res)
);
proposalRoute.post("/create", (req, res) =>
  proposalController.createProposal(req, res)
);

export default proposalRoute;
