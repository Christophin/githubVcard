import $ from 'jquery';

function searchRepos ()  {
  //debugger;
  return $.ajax({
    url: `https://api.github.com/users/christophin`,
    dataType: "json",
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
