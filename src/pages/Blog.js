import React from 'react'
import '../assets/css/all.min.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'
import img1 from '../assets/images/blog/blog_1.jpg'
import img2 from '../assets/images/blog/blog_2.jpg'
import img3 from '../assets/images/blog/blog_3.jpg'
import img4 from '../assets/images/blog/blog_4.jpg'
import img5 from '../assets/images/blog/blog_5.jpg'
import img6 from '../assets/images/blog/blog_6.jpg'

const Blog = () => {

    const blogPosts = [
        {
          imgSrc: img1,
          title: 'Brilliant After All, A New Album by Rebecca: Help poor people',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis....',
        },
        {
          imgSrc: img2 ,
          title: 'South african pre primary school build for children',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis....',
        },
        {
          imgSrc: img3 ,
          title: 'Provide pure water for syrian poor people',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis....',
        },
        {
          imgSrc: img4 ,
          title: 'Provide pure water for syrian poor people',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis....',
        },
        {
          imgSrc: img5,
          title: 'Provide pure water for syrian poor people',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis....',
        },
        {
          imgSrc:img6,
          title: 'Provide pure water for syrian poor people',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis....',
        },
      ];
  return (
    <main className="charity-01-main">
    {/* ============abt-01 Section  Start============ */}
    <section className="abt-01">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-wrapper">
              <h3>Blog</h3>
              <ol>
                <li>Home<i className="far fa-angle-double-right"></i></li>
                <li>Blog</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ========bg-03 started ========= */}
    <section className="bg-03">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="head-01">
              <h2>Latest news</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <article className="_kl_cd">
                <div className="_i-tr">
                  <img src={post.imgSrc} alt={post.title} />
                </div>
                <div className="_oi_er_we">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
  )
}

export default Blog;
