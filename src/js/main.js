import $ from 'jquery';
import {searchRepos} from './github.js';
import {buildDisplay} from './template.js';


searchRepos().then(displayResults);

function displayResults(data) {
  $(".container").empty();
  $(".container").append(buildDisplay(data))
};
