import React from 'react';
import './assets/css/animate.css'
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import blogImage1 from './assets/images/blog/1.jpg'; // Adjust the import paths as necessary
import blogImage2 from './assets/images/blog/2.jpg';
import blogImage3 from './assets/images/blog/3.jpg';

const Event = () => {
  const blogs = [
    {
      img: blogImage1,
      title: 'THE TRADITIONAL WAY',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at numquam, asperiores aut praesentium facilis ratione!',
      author: 'Admin',
      date: 'July 28, 2020',
    },
    {
      img: blogImage2,
      title: 'THE TRADITIONAL WAY',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at numquam, asperiores aut praesentium facilis ratione!',
      author: 'Admin',
      date: 'July 28, 2020',
    },
    {
      img: blogImage3,
      title: 'THE TRADITIONAL WAY',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at numquam, asperiores aut praesentium facilis ratione!',
      author: 'Admin',
      date: 'July 28, 2020',
    },
  ];

  return (
    <section className="blog">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading">
              <h2>Our Events </h2>
            </div>
          </div>
          {blogs.map((blog, index) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12" key={index}>
              <article className="blog-sub">
                <div className="blog-content">
                  <img src={blog.img} alt={blog.title} />
                </div>
                <div className="blog-content-section">
                  <div className="blog-content-title">
                    <h4>{blog.title}</h4>
                    <p>{blog.description}</p>
                  </div>
                  <div className="blog-admin">
                    <ol>
                      <li><i className="flaticon-coffee"></i> By {blog.author}</li>
                      <li><i className="flaticon-calendar"></i> {blog.date}</li>
                    </ol>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
