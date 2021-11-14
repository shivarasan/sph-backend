import convert from 'xml-js';
import { searchResponse } from '../mock/searchResponse';
import axios from 'axios'
import { searchResult } from "../models/searchResult"

const getSearchResults = async (search: string) => {
    try {
        // const searchResponse = await axios.get(`http://${process.env.HOST_ADDRESS}/webservice/open-search/solar/${search}/content-search-description.xml`);
        const searchResult = convert.xml2json(searchResponse.data, { compact: true, spaces: 4 });
        const Records = JSON.parse(searchResult).OpenSearchDescription.Records;
        const response = Records.map((item) => ({
            ShortDescription: item.ShortDescription._text,
            LongName: item.LongName._text,
            Contact: item.Contact._text,
            Developer: item.Developer._text,
            SyndicationRight: item.SyndicationRight._text,
        }))
        return response as Array<searchResult>
    } catch (e) {
        throw new Error(e);
    }
};

export { getSearchResults };
