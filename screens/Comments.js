import { SafeAreaView, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import NavigationBar from '../components/NavigationBar';
import CommentList from '../components/CommentList';
import CommentInput from '../components/CommentInput';

export default function Comments({
    style,
    onSubmitComment,
    onClose,
    comments,
}) {
    return (
        <SafeAreaView style = {style}>
            <NavigationBar
                title="Comments"
                leftText= 'Close'
                onPressLeftText= {onClose}
                />

                <CommentInput placeholder = "Leave a Comment" onSubmit={onSubmitComment} />
                <CommentList items ={comments} />
        </SafeAreaView>
    );
}

Comments.propTypes = {
    style: ViewPropTypes.style,
    comments: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmitComment: PropTypes.func.isRequired,
 };

 Comments.defaultProps = {
    style: null,
 };