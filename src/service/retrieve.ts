import convert from 'xml-js';
import axios from 'axios';
import { retrieveResponse } from "../mock/retrieveResponse";
import { retrieveResult } from "../models/retrieveResult";

const getRetrieveResult = async (detailId: string) => {
    try {
        // const retrieveResponse = await axios.get(`http://${process.env.HOST_ADDRESS}/webservice/solar/content/${detailId}`);
        const retrieveResult = convert.xml2json(retrieveResponse.data, { compact: true, spaces: 4 });
        const author = JSON.parse(retrieveResult).entry.author.name._text;
        const title = JSON.parse(retrieveResult).entry.title._text;
        const content = JSON.parse(retrieveResult).entry.content["vdf:payload"]["vdf:field"][1]['vdf:value'].div.p._text;
        const edited = JSON.parse(retrieveResult).entry["app:edited"]._text;
        const created = JSON.parse(retrieveResult).entry["dcterms:created"]._text;
        return {
            author,
            title,
            content,
            edited,
            created
        } as retrieveResult;
    } catch (e) {
        throw new Error(e);
    }
};

export { getRetrieveResult };