import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import BlogItems from "./blogItems";
import { Col, Container, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import '../../assets/css/blog.css'
const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Alamo Primary Care</title>
      </Helmet>
      <BreadCrumb
        title="Blog"
        bgImage={require("../../assets/img/about/hero_about.png")}
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/blogs" },
          { name: "Articles", url: "" },
        ]}
      />


      <section className="mt30">
        <Container>
          <BlogItems />
        </Container>
      </section>
    </>
  );
};

export default Blog;
