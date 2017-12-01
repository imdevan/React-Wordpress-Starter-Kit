import React from 'react';
import footerContent from '../config/footerContent';
import { Grid, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return <div className='c-bg-light-gray w-100'>
    <Grid className='py-5'>
      <Row  className='my-5'>
      {footerContent.sections.map((section, i) => (
        <Col sm={12} md={4} key={i} className={`${i < footerContent.sections.length-1 ? 'mb-3 mb-md-0': ''}`}>
          <h3>
            {section.title}
          </h3>

          {section.links.map((l, k) => (
            <small  key={k} className='d-block'>
              <a href={`${l.link}`} target={l.blank ? '_blank' : ''}>
                {l.label}
              </a>
            </small>
          ))}
        </Col>
      ))}
      </Row>
    </Grid>
  </div>
};

export default Footer;