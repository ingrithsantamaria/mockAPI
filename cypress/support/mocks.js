export class MockPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }
  mockPosts(post1, post2) {
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/posts", (req) => {
 
      req.reply((res) => {
        res.body[0].title = post1.title;
        res.body[0].body = post1.body;
        res.body[1].title = post2.title;
        res.body[1].body = post2.body;
        return res;
      });
    }).as("getPosts");
  }
  mockPosts() {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {
      statusCode: 200,
      body: [
        { id: 1, title: 'Post 1', body: 'This is the first post', userId: 1 },
        { id: 2, title: 'Post 2', body: 'This is the second post', userId: 1 },
      ],
    }).as('getPosts');
  }
  // checkPosts() {
  //   cy.wait('@getPosts').its('response.body').should('deep.include', {
  //     id: 1,
  //     title: 'Post 1',
  //     body: 'This is the first post',
  //     userId: 1,
  //   }).and('deep.include', {
  //     id: 2,
  //     title: 'Post 2',
  //     body: 'This is the second post',
  //     userId: 1,
  //   });
  // }
}
