import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment';
import { getAngularService } from '../../services/AngularReactHelper';

const CommentList = (props) => {
    const AuthorService = getAngularService(document, 'AuthorService');
    const toComment = (c, i) =>
        <Comment key={ i } comment={ c } author={ AuthorService.getAuthor(c.authorId) } />;
    return (
        <div>
            { props.comments.map(toComment) }
        </div>
    );
};

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
};

export default CommentList;
