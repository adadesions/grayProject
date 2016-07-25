import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Layout
import Container from '../../imports/layouts/Container.jsx';

// Component
import Main from '../../imports/pages/Main.jsx';

const mainRouter = FlowRouter.group({
  name: 'mainpage',
});

mainRouter.route('/', {
  name: 'main',
  action() {
    mount(Container, {
      content: <Main />,
    });
  },
});
