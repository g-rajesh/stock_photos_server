// const { CLIENT_ID } = require("../../config/config");
const fetch = require("node-fetch");

const fetchData = async (url) => {
     const res = await fetch(url);
     const data = await res.json();
     return data;
};

module.exports = {
     Query: {
          getPhotos: async (_, { page, query }) => {
               if (!page) {
                    page = 1;
               }

               let url = `https://api.unsplash.com/photos/?client_id=${process.env.CLIENT_ID}&page=${page}`;
               if (query) {
                    url = `https://api.unsplash.com/search/photos/?client_id=${process.env.CLIENT_ID}&query=${query}&page=${page}`;
               }

               let data = await fetchData(url);

               if (query) {
                    data = data.results;
               }

               const photos = data.map((photo) => {
                    return {
                         id: photo.id,
                         picture: photo.urls.regular,
                         picture_description: photo.alt_description,
                         likes: photo.likes,
                         username: photo.user.username,
                         user_portfolio: photo.user.portfolio_url,
                         user_profile: photo.user.profile_image.medium,
                    };
               });

               console.log(`fetched ${page}`);

               return {
                    photos,
                    page: page + 1,
               };
          },
          
     },
};
