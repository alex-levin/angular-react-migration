import angular from 'angular';
require('angular-ui-router');

import CommentListModule from './components/CommentList';
import AuthorService from './services/AuthorService';
import CommentService from './services/CommentService/index.js';

const setupRoutes = ($stateProvider) => {
    $stateProvider
        .state('home', {
            url: '/',
            resolve: {
                comments: (CommentService) => CommentService.queryComments(),
                authors: (AuthorService) => AuthorService.queryAuthors(),
            },
            controllerAs: '$ctrl',
            controller: function (comments) {
                this.comments = comments;
            },
            template: `
                <h3>Hello World!</h3>
                <comment-list comments="$ctrl.comments"></comment-list>
            `,
        });
};

const enableHtml5Mode = ($locationProvider) => {
    $locationProvider.html5Mode({ enabled: true });
};

export default angular.module('ngReactExample', ['ui.router', CommentService.name,
    AuthorService.name, CommentListModule.name])
        .config(enableHtml5Mode)
        .config(setupRoutes);


