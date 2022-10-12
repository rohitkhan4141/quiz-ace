import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Blog.css";

const Blog = () => {
  return (
    <div className='blog'>
      <h1>Blog</h1>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>What is useRef hook in ReactJs ?</Accordion.Header>
          <Accordion.Body>
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.If we
            tried to count how many times our application renders using the
            useState Hook, we would be caught in an infinite loop since this
            Hook itself causes a re-render. To avoid this, we can use the useRef
            Hook.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>What is perpose of React Router?</Accordion.Header>
          <Accordion.Body>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>How does context api works ?</Accordion.Header>
          <Accordion.Body>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
            <br />
            <br />
            React.createContext() is all you need. It returns a consumer and a
            provider. Provider is a component that as it's names suggests
            provides the state to its children. It will hold the "store" and be
            the parent of all the components that might need that store.
            Consumer as it so happens is a component that consumes and uses the
            state.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
