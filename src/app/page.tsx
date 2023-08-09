'use client';

// Imports
// React imports
import React from 'react';

// Ant Design imports
import { Button, ConfigProvider } from 'antd';
import theme from './themeConfig';

const Home = () => (
  <ConfigProvider theme={theme}>
    <div className="App">
      <Button type="primary">Button</Button>
    </div>
  </ConfigProvider>
);

export default Home;
