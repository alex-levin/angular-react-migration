import angular from 'angular';
// import { reactToAngularComponent } from '../../services/AngularReactHelper';
import { react2angular } from 'react2angular';
import CommentList from './presenter';

module.exports = angular.module('ngReactExample.commentList', [
]).component('commentList', react2angular(CommentList));
