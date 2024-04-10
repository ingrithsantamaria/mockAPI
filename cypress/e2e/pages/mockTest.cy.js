import { MockPage } from "../../support/mocks";
const mocks = new MockPage()
describe('Mock API Test with POM', () => {
  it('Should mock the posts API and check the first two posts', () => {
    mocks.mockPostsApi()
    mocks.visit()
    // cy.wait('@getPosts').then((interception) => {
    //   console.log(JSON.stringify(interception))
    //     expect(interception.response.body[0].title).to.eq('Post1');
    //     expect(interception.response.body[0].body).to.eq('Post2');
    //     expect(interception.response.body[1].title).to.eq('This is the first post');
    //     expect(interception.response.body[1].body).to.eq('This is the second post');
    // })
    cy.request('/posts').then((response) => {
      console.log(JSON.stringify(response))
      expect(response.body[0].title).to.eq('Post1');
      expect(response.body[0].body).to.eq('Post2');
      expect(response.body[1].title).to.eq('This is the first post');
      expect(response.body[1].body).to.eq('This is the second post');
    });
  });
});