import React from 'react';

const Footer = () => {
  return (
    <footer className="my-8 py-8 px-8 bg-white rounded-lg grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-8 justify-between">
      <ul>
        <h3 className="font-semibold">Our Location</h3>
        <p>77th Sudirman Street</p>
        <p> (between 5th and 6th Avenues)</p>
        <p> East Java, ID 10019</p>
      </ul>
      <ul>
        <h3 className="font-semibold">Follow Us</h3>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
        <li></li>
      </ul>

      <ul>
        <h3 className="font-semibold">Built with</h3>
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
      </ul>
    </footer>
  );
};

export default Footer;
