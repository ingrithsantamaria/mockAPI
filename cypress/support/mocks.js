export class MockPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }
  //   mockPostsApi() {
  //     cy.intercept("GET", "/posts", {
  //       statusCode: 200,
  //       body: [
  //         { userId: 1, id: 1, title: "Post1", body: "This is the first post" },
  //         { userId: 1, id: 2, title: "Post2", body: "This is the second post" },
  //       ],
  //     }).as("mockedPosts");
  //   }
  mockPostsApi() {
    cy.intercept("GET", "/posts", (req) => {
      req.reply((res) => {
        if (Array.isArray(res.body) && res.body.length > 0) {
          res.body[0].title = "Post1",
          res.body[0].body = "This is the first post",
          res.body[1].title = "Post2",
          res.body[1].body = "This is the second post";
        }
      });
    }).then((interception) => {
      console.log("Successful", interception);
    });
  }
}
