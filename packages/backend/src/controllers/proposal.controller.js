const { getProposalService } = require("../services/proposal.service")

const getProposalController = async (req, res) => {
    const result = await getProposalService()
     res.send(result)
}

module.exports = {
    getProposalController
}