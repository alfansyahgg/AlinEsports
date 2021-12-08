import React from "react";

const SosmedSponsors = ({ website, instagram, facebook }) => {
  return (
    <div className="flex justify-center w-full mt-5">
      <a href={website}>
        <i className="fa fa-globe text-white"></i>
      </a>
      <a href={instagram}>
        <i className="fab fa-instagram text-white pl-3"></i>
      </a>
      <a href={facebook}>
        <i className="fab fa-facebook text-white pl-3"></i>
      </a>
    </div>
  );
};

SosmedSponsors.defaultProps = {
    website: '#',
    instagram: '#',
    facebook: '#'
}

export default SosmedSponsors;
