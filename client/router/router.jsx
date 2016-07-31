import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Layout
import Container from '../../imports/layouts/Container.jsx';

// Component
import Main from '../../imports/pages/Main.jsx';
import Register from '../../imports/pages/Register.jsx';
import Profile from '../../imports/pages/Profile.jsx';

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

mainRouter.route('/register', {
  name: 'register',
  action() {
    mount(Container, {
      content: <Register />,
    });
  },
});

mainRouter.route('/profile', {
  name: 'profile',
  action() {
    mount(Container, {
      content: <Profile />,
    });
  },
});
