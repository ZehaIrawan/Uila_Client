import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-8 pt-8 px-8 sm:px-20 pb-16 sm:pb-40 bg-black text-white">
      <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-8 justify-between border-b-2 pb-12">
        <div className="">
          <div className="flex">
            <img
              className="h-10 pr-6"
              src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d0558d91063038236b60e3ef71fdc1fd.svg"
              alt=""
            />
            <img
              className="h-10"
              src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cf6dad406fdfdcd290fd40de9008ae50.png"
              alt=""
            />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Our Location</h3>
          <p>77th Sudirman Street</p>
          <p> (between 5th and 6th Avenues)</p>
          <p> East Java, ID 10019</p>
        </div>

        <div>
          <h3 className="font-semibold  mb-4">Built with</h3>
          <ul>
            <li>React</li>
            <li>
              <a
                href="https://icons8.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Icons8
              </a>
            </li>
            <li>Ruby on Rails</li>
          </ul>
        </div>
      </div>
      <div className="flex justify between w-full">
        <div>Twitter</div>
        <div>Privacy Policy</div>
      </div>
    </footer>
  );
};

export default Footer;
