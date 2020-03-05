import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Image, Icon, Grid, List } from 'semantic-ui-react';

const srcHelloKittyHead = 'https://cdn.clipart.email/51680a4ee672aedf5e1769c454975447_hello-kitty-hello-kitty-head-clipart-in-png-file-gifyu_2000-1424.png'
const srcSanrioLogo = 'https://sanrio-production-weblinc.netdna-ssl.com/assets/weblinc/store_front/logo_home-cecf45498400cb4ccb7edecdb351f23f9ede792068c0092aaac20fa818c61c93.png'
const srcSanrioShipping = 'https://www.sanrio.com/media/W1siZiIsIjIwMTkvMDYvMTIvMTYvNTIvMTIvOTcwL3hzYl9mcmVlX3NoaXBwaW5nXzIwMTgxMjE0YS5qcGciXV0/xsb_free-shipping_20181214a.jpg?sha=6dc5cb7f948f0476'
const srcVanity = 'https://sanrio-production-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMjAvMDIvMjUvMTgvMzQvMTEvOTA0L0hQX0ltcHJlc3Npb25zVmFuaXR5XzAxMDcyMDIwXzAyLmpwZyJdLFsicCIsIm9wdGltIl1d/HP_ImpressionsVanity_01072020_02.jpg?sha=e257acfbcba196f5'
const srcSanrioJapangeles = 'https://sanrio-production-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMjAvMDIvMjAvMTcvMzkvMTIvNDgwL0hQX2phcGFuZ2VsZXNfZ3VkZXRhbWFfY29sbGVjdGlvbl8wMjIxMjAyMC5qcGciXSxbInAiLCJvcHRpbSJdXQ/HP_japangeles_gudetama_collection_02212020.jpg?sha=b484487c4763eb39'

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topMenu">
          <Container>
            <Menu.Item><Image src={srcHelloKittyHead} size='mini' /></Menu.Item>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Blog</Menu.Item>
            <Menu.Item>Hello Kitty Cafe</Menu.Item>
            <Menu.Item position="right">My Account</Menu.Item>
            <Menu.Item>Store Locator</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    const middleStyle = {font-size: 20px};
    return (
        <Menu borderless className="middleMenu" style={middleStyle}>
          <Container>
            <Menu.Item><Image src={srcSanrioLogo} size='small' /></Menu.Item>
            <Menu.Item>New</Menu.Item>
            <Menu.Item>Featured</Menu.Item>
            <Menu.Item>Characters</Menu.Item>
            <Menu.Item>Apparel</Menu.Item>
            <Menu.Item>Bags</Menu.Item>
            <Menu.Item>Accessories</Menu.Item>
            <Menu.Item>Beauty</Menu.Item>
            <Menu.Item>Plush & Toys</Menu.Item>
            <Menu.Item>Stationery</Menu.Item>
            <Menu.Item>Home & Kitchen</Menu.Item>
            <Menu.Item>Kids</Menu.Item>
            <Menu.Item><Icon name='search' color='blue' /></Menu.Item>
            <Menu.Item fitted><Icon name='shopping bag' color='blue' /></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class FreeShipping extends React.Component {
  render() {
    return (
        <div>
          <Container className='shipping'>
            <Image src={srcSanrioShipping} />
          </Container>
        </div>
    );
  }
}

class Vanity extends React.Component {
  render() {
    return (
        <div>
          <Container className='vanity'>
            <Image src={srcVanity} />
          </Container>
        </div>
    );
  }
}

class SanrioJapangeles extends React.Component {
  render() {
    return (
        <div>
          <Container className='japangeles'>
            <Image src={srcSanrioJapangeles} />
          </Container>
        </div>
    );
  }
}

class StaffPicks extends React.Component {
  render() {
    return (
        <Container>
        <Grid centered>
          <Grid.Row>
            <h2>Shop Sanrio Staff Picks!</h2>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              bruh
            </Grid.Column>
            <Grid.Column>
              bruh 2
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
    );
  }
}

class HelloFooter extends React.Component {

    render() {
    return (
        <div className='footer'>
        <Container>
          <Grid centered columns={4}>
            <Grid.Column>
              <List>
                <List.Item><h3>World of Sanrio</h3></List.Item>
                <List.Item>About Sanrio</List.Item>
                <List.Item>Other Countries</List.Item>
                <List.Item>Business Opportunities</List.Item>
                <List.Item>Careers</List.Item>
                <List.Item>Press Releases</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item><h3>Need Help?</h3></List.Item>
                <List.Item>Customer Service</List.Item>
                <List.Item>FAQs</List.Item>
                <List.Item>CPSIA</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item><h3>Resources</h3></List.Item>
                <List.Item>Store Locator</List.Item>
                <List.Item>Children's Privacy Policy</List.Item>
                <List.Item>Privacy Policy</List.Item>
                <List.Item>Copyright Info</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item><h3>More</h3></List.Item>
                <List.Item>e-Gift Card</List.Item>
                <List.Item>Deals</List.Item>
                <List.Item>Sale</List.Item>
                <List.Item>Hello Kitty Cafe</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Container>
        </div>
    );
  }
  }

class Sanrio extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <FreeShipping/>
          <Vanity/>
          <SanrioJapangeles/>
          <StaffPicks/>
          <HelloFooter/>
        </div>
    );
  }
}

ReactDOM.render(<Sanrio/>, document.getElementById('root'));