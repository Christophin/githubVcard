import $ from 'jquery';
import GH_TOKEN from './token.js';

function searchRepos ()  {
  //debugger;
  return $.ajax({
    url: `https://api.github.com/users/christophin`,
    dataType: "json",
    headers: {
      "Authorization": `token ${GH_TOKEN}`
    },
    //success: console.log
  });
}

export {searchRepos}

    //
    // name: object.name,
    // username: object.login
    // github: object.html_url
    // email: object.email
    // company: object.company
    // website: object.blog
    // profile-pic: object.avatar_url
    // bio: object.bio
