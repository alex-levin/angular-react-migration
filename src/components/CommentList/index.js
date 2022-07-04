import angular from 'angular';
import { react2angular } from 'react2angular';
import CommentList from './presenter';

export default angular.module('ngReactExample.commentList', [
]).component('commentList', (react2angular(CommentList)));
