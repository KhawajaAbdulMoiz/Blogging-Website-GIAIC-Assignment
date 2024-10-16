"use client";
import Blog from './Blog2/page';

import Link from 'next/link';

const Main = () => {
  return (
    <div>
      <nav className="navbar">
        <Link href="/">
        <h1 className='home'>Home</h1>
        </Link>
       
      </nav>
      <div className="image-container">
                <img src="globe.webp" alt="Blog Header" className="top-image" />
                <div className="overlay-text">DISCOVERING TECHNOLOGY THROUGH SHARED INSIGHTS</div>
            </div>
      
      <div className="container">
        <h1 className="title">Latest Blogs</h1>
        <div className="blogGrid">
        <Link href="/About">
          <div className="blogCard">
            <img src="/Quantum Computing.jpg" alt="Quantum Computing Basics for Developers" className="blogImage" width="300" height="200" />
            <h2 className="blogTitle">Quantum Computing Basics for Developers</h2>
            <p className="blogDescription">Learn the fundamentals of quantum computing and how it applies to software development.</p>
          </div>
          </Link>
          <Link href="/Blog2">
          <div className="blogCard">
            <img src="/Edc.jpeg" alt="Edge Computing vs. Cloud Computing" className="blogImage" width="300" height="200" />
            <h2 className="blogTitle">Edge Computing vs. Cloud Computing</h2>
            <p className="blogDescription">An in-depth comparison of edge and cloud computing and their impact on modern applications.</p>
          </div>
          </Link>
    <Link href="/Blog3">
          <div className="blogCard">
            <img src="/MLModel.jpeg" alt="Machine Learning Model Interpretability" className="blogImage" width="300" height="200" />
            <h2 className="blogTitle">Machine Learning Model Interpretability</h2>
            <p className="blogDescription">Explore methods for making machine learning models more interpretable and understandable.</p>
          </div>
          </Link>
          <Link href="/Blog4">
          <div className="blogCard">
            <img src="Ai.jpeg" alt="Comparing Programming Languages for AI Development" className="blogImage" width="300" height="200" />
            <h2 className="blogTitle">Comparing Programming Languages for AI Development</h2>
            <p className="blogDescription">Find out which programming languages are best suited for AI development.</p>
          </div>
          </Link>
          <Link href="/Blog5">
          <div className="blogCard">
            <img src="TS.jpeg" alt="The Future of TypeScript in Frontend Development" className="blogImage" width="300" height="200" />
            <h2 className="blogTitle">The Future of TypeScript in Frontend Development</h2>
            <p className="blogDescription">Understand the growing role of TypeScript in the frontend development landscape.</p>
          </div>
          </Link>
          <Link href="/Blog6">
          <div className="blogCard">
            <img src="nlp.png" alt="Advancements in Natural Language Processing" className="blogImage" width="300" height="200" />
            <h2 className="blogTitle">Advancements in Natural Language Processing</h2>
            <p className="blogDescription">Stay updated on the latest advancements in Natural Language Processing and its applications.</p>
          </div>
          </Link>
          <Link href="/Blog7">
          <div className="blogCard">
            <img src="nlp.png" alt="Advancements in Natural Language Processing" className="blogImage" width="300" height="200" />
            <h2 className="blogTitle">How Cloud-Native Development Shapes the Future of Software</h2>
            <p className="blogDescription">Cloud-native development transforms software by leveraging scalable, flexible architectures that enhance agility and streamline deployment, driving innovation in the digital landscape.</p>
          </div>
          </Link>
          
        </div>
      </div>
      <footer>
        <div className="footer-content">
        <p>&copy; 2024 Blogging Website. All Rights Reserved.</p>     
        </div>
        </footer>
      </div>
   
  );
};

export default Main;





