import React from 'react';
import { Container, Grid, Header, Icon, List, Segment } from 'semantic-ui-react';

const Footer: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000000' }}>
      <Container style={{ padding: '0px', margin: '0px' }}>
        <Grid divided inverted stackable verticalAlign="bottom">
          <Grid.Row style={{ padding: '5px 0', margin: '0em' }}>
            {/* Contact Info Column */}
            <Grid.Column width={8} textAlign="left">
              <Header as="h4" content="Contact Us" />
              <List style={{ color: '#ffffff' }}>
                <List.Item>
                  Email: contact@example.com | <Icon name="phone" /> Phone: +1234 567 890
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={8} textAlign="right">
              <p style={{ color: 'gray' }}>&copy; 2025 Your Company. All rights reserved.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
