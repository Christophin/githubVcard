import $ from 'jquery';

function buildDisplay (info)  {
  return `
    <div class="header">
      <h1 class="chris title is-1">${info.name}</h1>
    </div>
    <div class="zigzag container2"></div>
    <div class="columns is-third">
      <div class="column">
        <h1 class="title is-2">The Basics</h1>
        <table class="table">
          <tbody>
            <tr>
              <td>Name:</td>
              <td>${info.name}</td>
            </tr>
            <tr>
              <td>Github URL:</td>
              <td><a href="${info.html_url}">${info.login}</a></td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>${info.email}</td>
            </tr>
            <tr>
              <td>Company</td>
              <td>${info.company}</td>
            </tr>
            <tr>
              <td>Website</td>
              <td><a href="${info.blog}">Christophin.com</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <h1 class="title is-2">The Story</h1>
        <div>${info.bio}</div>
      </div>
      <div class="media-right">
        <figure class="image" style="height: 110px; width: 110px;">
          <img src="${info.avatar_url}" alt="Image">
        </figure>
      </div>
    </div>
  `;
};

export {buildDisplay}
