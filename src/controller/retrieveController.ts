import { getRetrieveResult } from "../service/retrieve"
import { retrieveResult } from "../models/retrieveResult";

const retrieve = async (req, res) => {
    try {
        const getRetrieveResponse = await getRetrieveResult(req.query.detailId);
        res.status(200).send({ data: getRetrieveResponse as retrieveResult })
    } catch {
        res.status(400).send({ msg: 'Oh uh, something went wrong' })
    }
};

export { retrieve };
