'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import QuestionItem from 'components/QuestionItem.jsx';

describe('QuestionItem', () => {
    let QuestionItemComponent;

    beforeEach(() => {
        QuestionItemComponent = createComponent(QuestionItem);
    });

    it('should have its component name as default className', () => {
        expect(QuestionItemComponent._store.props.className).toBe('QuestionItem');
    });
});
