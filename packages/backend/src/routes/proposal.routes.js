
const { Router } = require('express');
const {  getProposalController } = require('../controllers/proposal.controller');

const proposalRoute = Router();

proposalRoute.get('/', getProposalController )

module.exports = {
    proposalRoute
} 