import React from 'react';
import '../styles/styles.scss';

const TopBanner = () => {
  const hasuraDumbledore = 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/hasura-dumbledore-new.png';
  return (
    <section className='blueBgColor positionRel'>
      <div className='container noPadd'>
        <div className='topBannerWrapper col-md-12 noPadd'>
          <div className='col-md-6 col-sm-6 col-xs-12'>
            <div className='pageHeader'>
              Real world GraphQL tutorials for frontend developers with deadlines!
            </div>
            <div className='sectionDescription'>
              {/* With these <a href="https://github.com/hasura/learn-graphql">open-source</a> community maintained tutorials, you will move from the basics of GraphQL to building a real-time application in 2 hours.*/}
              You will move from GraphQL basics to production-ready concepts with our hands-on tutorials for frontend and backend developers.
            </div>
          </div>
          <div className='col-md-6 col-sm-6 col-xs-12'>
            <div className='topBannerImg'>
              <img className='img-responsive' src={hasuraDumbledore} alt='Hasura dumbledore' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBanner;
