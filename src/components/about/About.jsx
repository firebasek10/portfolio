import './about.css';
import Award from '../../img/award.png';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="images/555.png" alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">DIGITAL MARKETING </h1>
        <p className="a-sub">
          Engaging complete SEO process (on & off page optimization) and web
          analytics Providing SEO guidance and recommendations for SEO friendly
          website design and development. Developing and improving websites to
          enhance natural search rankings. Researching with important
          keywords/PPC techniques Correct priority for search engine
          optimization Stays up to date with industry trends..
        </p>
        <p className="a-sb">
          Promoting both offsite and onsite activities and also the interactions
          that build ranking, profile and traffic Good at creating sponsored ads
          on facebook ,twitter and linkedin Good about email marketing tools
          like mail chimp and send blaster, constant contact.
        </p>
        {/* <p className="a-desc">
          

Engaging complete SEO process (on & off page optimization) and web analytics Providing SEO guidance and recommendations for SEO friendly website design and development. Developing and improving websites to enhance natural search rankings.
Researching with important keywords/PPC techniques Correct priority for search engine optimization Stays up to date with industry trends. Promoting both offsite and onsite activities and also the interactions that build ranking, profile and traffic
Good at creating sponsored ads on facebook ,twitter and linkedin Good about email marketing tools like mail chimp and send blaster, constant contact.

        </p> */}
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              Certified in Pixxel Art MultiMedia Graphics design
            </h4>
            <p className="a-award-desc">
              Graphic Designing in logos, banners, flyers, marketing materials
              and website design. Designing page layouts, static & Flash
              banners.Involved in designing advertisements, brochures, handouts,
              flyers and online graphics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
