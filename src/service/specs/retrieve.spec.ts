import { getRetrieveResult } from "../retrieve";
describe('Retrieve', () => {
  describe('retrieve result', () => {
    it('Should return  data for retrieve result function', async () => {
      const response = await getRetrieveResult('43');
      await expect(response).toMatchObject({
        author: "demo Administrator",
        content: "This is a test",
        created: "2010-06-22T10:22:20.000Z",
        edited: "2010-06-23T09:09:50.654Z",
        title: "Test",
      })
    })
  })
})