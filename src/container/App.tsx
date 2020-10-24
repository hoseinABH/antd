import React, { FC } from 'react';
import './App.less';
import Header from '../components/header-component/Header';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Footer from '../components/footer-component/Footer';
import Articles from '../Pages/Article/Articles';
import Article from '../Pages/Article/Article';
import Books from '../Pages/Book/Books';
import Guides from '../Pages/Guide/Guides';
import Courses from '../Pages/Course/Courses';
import NotFound from '../Pages/NotFound/NotFound';
import CourseSingle from '../Pages/Course/Course';

const App: FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles/:id" component={Article} />
        <Route path="/articles" component={Articles} />
        <Route path="/books" component={Books} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/courses/:id" component={CourseSingle} />
        <Route path="/guides" component={Guides} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
