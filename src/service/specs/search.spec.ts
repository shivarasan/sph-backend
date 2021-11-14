import { getSearchResults } from "../search";
describe('Search', () => {
    describe('get serach result', () => {
        it('Should return  data for search result function', async () => {
            const response = await getSearchResults('43');
            await expect(response).toMatchObject([{
                Contact: "http://www.solar.com/",
                Developer: "Solar AS",
                LongName: "Solar Content Engine Search",
                ShortDescription: "Solar search1",
                SyndicationRight: "private",
            },
            {
                Contact: "http://www.solar.com/",
                Developer: "Solar AS",
                LongName: "Solar Content Engine Search",
                ShortDescription: "Solar search2",
                SyndicationRight: "private",
            },
            {
                Contact: "http://www.solar.com/",
                Developer: "Solar AS",
                LongName: "Solar Content Engine Search",
                ShortDescription: "Solar search3",
                SyndicationRight: "private",
            }
            ])
        })
    })
})