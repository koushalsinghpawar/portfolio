import React from "react";
import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

function Contects() {
  return (
    <>
      <div className="container contects">
        <h1>Contects Us</h1>

        <form >
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <br />
            <input type="email" class="form" placeholder="Enter email" />
          </div>
          <br />
          <div class="">
            <label>desctription</label> <br />
            <textarea id="story" name="story" rows="5" cols="33" placeholder="enter your Query here!!">
    
</textarea>
          </div>
          <br />
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="contect-item">
          <Link to="https://www.instagram.com/" className="icon">
            <FaInstagramSquare />
          </Link>
          <Link to="https://www.Linkedin.com/" className="icon">
            <FaLinkedin />
          </Link>
          <Link to="https://www.Facebook.com/" className="icon">
            <FaFacebookF />
          </Link>
          <Link to="https://www.Twitter.com/" className="icon">
            <BsTwitterX />
          </Link>
          <Link to="https://www.Github.com/" className="icon">
            <FaGithubSquare />
          </Link>
          <Link to="mailto:koushalsing161@gmail.com" className="icon">
            <FaMailBulk />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contects;
