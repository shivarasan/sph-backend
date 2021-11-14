import { getSearchResults } from "../service/search";
import { searchResult } from "../models/searchResult"

const search = async (req, res) => {
    try {
        const getSearchResponse = await getSearchResults(req.query.search);
        res.status(200).send({ data: getSearchResponse as Array<searchResult> })
    } catch {
        res.status(400).send({ msg: 'Oh uh, something went wrong' })
    }
};

export { search };
