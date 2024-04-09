import { MockPage } from "../../support/mocks";
const mocks = new MockPage()
describe('Mock API Test with POM', () => {
  it('Should mock the posts API and check the first two posts', () => {
    const post1 = {
      title: "Post 1",
      body: "This is the first post",
    };
    const post2 = {
      title: "Post 2",
      body: "This is the second post’",
    };
    mocks.visit()
    mocks.mockPosts(post1, post2)
    cy.wait('@getPosts').then((interception) => {
      expect(interception.response.body[0].title).to.eq(post1.title);
      expect(interception.response.body[0].body).to.eq(post1.body);
      expect(interception.response.body[1].title).to.eq(post2.title);
      expect(interception.response.body[1].body).to.eq(post2.body);
    });
  });
});