const { gql } = require("apollo-server");

module.exports = gql`
     type Photos {
          id: ID!
          picture: String
          picture_description: String
          likes: Int
          username: String!
          user_portfolio: String
          user_profile: String
     }

     type PhotoWithPageInfo {
          page: Int!
          photos: [Photos!]!
     }

     type Query {
          getPhotos(page: Int, query: String): PhotoWithPageInfo!
     }
`;
